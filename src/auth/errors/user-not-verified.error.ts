import { UnauthorizedException } from '@nestjs/common';

export class UserNotVerifiedError extends UnauthorizedException {
  code: string = 'USER_NOT_VERIFIED';

  constructor(message = 'User not verified') {
    super(message);
  }
}
