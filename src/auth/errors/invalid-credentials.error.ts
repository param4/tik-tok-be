import { UnauthorizedException } from '@nestjs/common';

export class InvalidCrendtialsError extends UnauthorizedException {
  code: string = 'INVALID_CREDENTIALS';

  constructor(message = 'Invalid credentials') {
    super(message);
  }
}
