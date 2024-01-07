import { UnauthorizedException } from '@nestjs/common';

export class UnauthorizedError extends UnauthorizedException {
  code: string = 'UNAUTHORIZED';

  constructor(message = 'Unauthorized') {
    super(message);
  }
}
