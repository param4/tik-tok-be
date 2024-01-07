import { Module } from '@nestjs/common';
import { BcryptService } from './provider/bcrypt/bcrypt.service';
import { PasswordService } from './password.service';

@Module({
  providers: [BcryptService, PasswordService],
  exports: [PasswordService, BcryptService],
})
export class PasswordModule {}
