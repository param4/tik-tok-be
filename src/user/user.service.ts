import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserType } from './types';
import { EmailAlreadyExistError, UsernameAlreadyExistError } from './errors';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async createUser(user: UserType): Promise<string> {
    const userfetchResult = await this.userRepository.findOne({
      where: [{ email: user.email }, { username: user.username }],
    });

    if (userfetchResult.email === user.email) {
      throw new EmailAlreadyExistError();
    }

    if (userfetchResult.username === user.username) {
      throw new UsernameAlreadyExistError();
    }

    const insertionResult = await this.userRepository.insert(user);
    return insertionResult.identifiers[0].id;
  }
}
