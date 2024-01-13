import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { SignInRequestDto, SignUpRequestDto } from '../dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { InvalidCrendtialsError, UserNotVerifiedError } from '../errors';
import { Config } from 'config';
import { JwtPayloadType } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async signUp(user: SignUpRequestDto): Promise<string> {
    const userId = await this.userService.createUser(user);
    return userId;
  }

  public async signIn({
    email,
    password,
  }: SignInRequestDto): Promise<{ user: User; accessToken: string }> {
    const userfetchResult = await this.userService.validateUserForSignIn(
      email,
      password,
    );
    if (!userfetchResult) {
      throw new InvalidCrendtialsError();
    }

    if (!userfetchResult.isVerified) {
      throw new UserNotVerifiedError();
    }

    const accessToken = await this.generateAccessTokenFromUser(userfetchResult);
    return { user: userfetchResult, accessToken };
  }

  public async generateAccessTokenFromUser(user: User): Promise<string> {
    const jwtPayload: JwtPayloadType = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };

    return this.jwtService.sign(jwtPayload, {
      secret: Config.JWT_SECRET,
    });
  }
}
