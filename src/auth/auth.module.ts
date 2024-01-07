import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { PasswordModule } from 'src/common/password/password.module';
import { PasswordService } from 'src/common/password/password.service';

@Module({
  imports: [UserModule, PasswordModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, PasswordService],
})
export class AuthModule {}
