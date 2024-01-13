import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { UserType } from '../types';
import { EmailAlreadyExistError, UsernameAlreadyExistError } from '../errors';
import { PasswordService } from 'src/common/password/password.service';

@Injectable()
export class UserService {
  constructor(
    private readonly passwordService: PasswordService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async createUser(user: UserType): Promise<string> {
    const userfetchResult = await this.userRepository.findOne({
      where: [{ email: user.email }, { username: user.username }],
    });

    if (userfetchResult?.email === user.email) {
      throw new EmailAlreadyExistError();
    }

    if (userfetchResult?.username === user.username) {
      throw new UsernameAlreadyExistError();
    }

    user.password = await this.passwordService.hashPassword(user.password);

    const insertionResult = await this.userRepository.insert(user);
    return insertionResult.identifiers[0].id;
  }

  public async validateUserForSignIn(
    email: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) return null;

    const isPasswordValid = await this.passwordService.comparePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) return null;

    return user;
  }
}
