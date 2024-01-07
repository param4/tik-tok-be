import { BadRequestException } from '@nestjs/common';

export class UsernameAlreadyExistError extends BadRequestException {
  code = 'USERNAME_ALREADY_EXIST';

  constructor(message = 'Username already exist') {
    super(message);
  }
}
