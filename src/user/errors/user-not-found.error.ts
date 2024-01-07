import { NotFoundException } from '@nestjs/common';

export class UserNotFoundError extends NotFoundException {
  code: string = 'USER_NOT_FOUND';

  constructor(message = 'User not found') {
    super(message);
  }
}
