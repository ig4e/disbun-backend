import {
  IsDateString,
  IsEmail,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class userRegisterDto {
  @MinLength(3, {
    message: 'Usesname is too short',
  })
  @MaxLength(50, {
    message: 'Usesname is too long',
  })
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsDateString()
  dateOfBirth: string;
}
