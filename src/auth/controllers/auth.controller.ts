import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInRequestDto, SignInResponseDto, SignUpRequestDto } from '../dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { SignUpResponseDto } from '../dto';

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

  @Post('sign-in')
  @ApiCreatedResponse({
    description: 'Logged in successfully.',
    type: SignInResponseDto,
  })
  public async signIn(
    @Body() requestBody: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    const { user, accessToken } = await this.authService.signIn(requestBody);

    return new SignInResponseDto(user, accessToken);
  }
}
