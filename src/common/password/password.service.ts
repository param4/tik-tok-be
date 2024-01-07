import { Injectable } from '@nestjs/common';
import { BcryptService } from './provider/bcrypt/bcrypt.service';
import { PasswordServiceEnum } from './enum';
import { InvalidPasswordServiceError } from './errors';

@Injectable()
export class PasswordService {
  constructor(private readonly bcryptService: BcryptService) {}

  public async hashPassword(
    password: string,
    passwordService: PasswordServiceEnum = PasswordServiceEnum.BCRYPT,
  ): Promise<string> {
    switch (passwordService) {
      case PasswordServiceEnum.BCRYPT:
        return this.bcryptService.hashPassword(password);
      default:
        throw new InvalidPasswordServiceError();
    }
  }

  public async comparePassword(
    password: string,
    hashedPassword: string,
    passwordService: PasswordServiceEnum = PasswordServiceEnum.BCRYPT,
  ): Promise<boolean> {
    switch (passwordService) {
      case PasswordServiceEnum.BCRYPT:
        return this.bcryptService.comparePassword(password, hashedPassword);
      default:
        throw new InvalidPasswordServiceError();
    }
  }
}
