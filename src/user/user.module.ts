import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { PasswordModule } from 'src/common/password/password.module';
import { PasswordService } from 'src/common/password/password.service';
import { BcryptService } from 'src/common/password/provider/bcrypt/bcrypt.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PasswordModule],
  providers: [UserService, PasswordService, BcryptService],
  exports: [UserService, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
})
export class UserModule {}
