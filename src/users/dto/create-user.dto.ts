import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
