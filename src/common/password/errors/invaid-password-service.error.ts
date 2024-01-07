import { InternalServerErrorException } from '@nestjs/common';

export class InvalidPasswordServiceError extends InternalServerErrorException {
  code = 'INVALID_PASSWORD_SERVICE';

  constructor(message = 'Invalid password service') {
    super(message);
  }
}
