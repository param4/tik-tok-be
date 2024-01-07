import { IsString } from 'class-validator';

export class SignUpResponseDto {
  @IsString()
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
