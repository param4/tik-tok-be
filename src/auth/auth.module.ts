import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { PasswordModule } from 'src/common/password/password.module';
import { PasswordService } from 'src/common/password/password.service';
import { JwtModule } from '@nestjs/jwt';
import { Config } from '../../config';

@Module({
  imports: [
    UserModule,
    PasswordModule,
    JwtModule.register({
      global: true,
      secret: Config.JWT_SECRET,
      signOptions: { expiresIn: Config.JWT_EXPIRATION_TIME },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, PasswordService],
})
export class AuthModule {}
