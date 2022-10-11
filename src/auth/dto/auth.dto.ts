import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @MinLength(6, {
    message: 'Password cannot be less than 6 characters!',
  })
  @IsString()
  password: string;
}
