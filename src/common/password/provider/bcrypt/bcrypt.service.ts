import { Injectable } from '@nestjs/common';
import { PasswordInterface } from '../password.interface';
import { hash, compare } from 'bcrypt';
import { Config } from '../../../../../config';

@Injectable()
export class BcryptService implements PasswordInterface {
  private readonly saltRounds = Config.SALT_ROUNDS;

  hashPassword(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }
  comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}
