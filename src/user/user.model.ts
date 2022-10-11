import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @ApiProperty({ example: 'tusvel', description: 'Username пользователя' })
  @prop()
  name: string;

  @prop({ unique: true })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @prop()
  password: string;

  @ApiProperty({ example: false, description: 'Админ или нет' })
  @prop({ default: false })
  isAdmin?: boolean;
}
