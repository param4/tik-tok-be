import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Matches,
} from 'class-validator';
import { Config } from '../../../config';

export class SignUpRequestDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Config.PASSWORD_REGEX, {
    message:
      'Password must be at least 8 characters long, and contain at least one letter and one number',
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  profilePic: string;

  @IsNotEmpty()
  @IsString()
  @Matches(Config.USERNAME_REGEX, {
    message:
      'Username must be at least 4 characters long, and contain only letters, numbers, and underscores',
  })
  username: string;
}
