import { BadRequestException } from '@nestjs/common';

export class EmailAlreadyExistError extends BadRequestException {
  code = 'EMAIL_ALREADY_EXIST';

  constructor(message = 'Email already exist') {
    super(message);
  }
}
