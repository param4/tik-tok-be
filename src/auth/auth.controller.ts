import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpRequestDto } from './dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { SignUpResponseDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiCreatedResponse({
    description: 'User has been successfully created.',
    type: SignUpResponseDto,
  })
  public async signUp(
    @Body() requestBody: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    const userId = await this.authService.signUp(requestBody);

    return new SignUpResponseDto(userId);
  }
}
