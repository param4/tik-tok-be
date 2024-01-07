import { IsString } from 'class-validator';
import { User } from 'src/user/user.entity';

export class SignInResponseDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  profilePic: string;

  @IsString()
  username: string;

  @IsString()
  isVerified: boolean;

  @IsString()
  accessToken: string;

  constructor(user: User, accessToken: string) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.phone = user.phone;
    this.profilePic = user.profilePic;
    this.username = user.username;
    this.isVerified = user.isVerified;
    this.accessToken = accessToken;
  }
}
