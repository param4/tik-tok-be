import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpRequestDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  public async signUp(user: SignUpRequestDto): Promise<string> {
    const userId = await this.usersService.createUser(user);
    return userId;
  }
}
