import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';

export interface MusicianModel extends Base {}

export class MusicianModel extends TimeStamps {
  @ApiProperty({ example: 'tusvel', description: 'Username пользователя' })
  @prop()
  name: string;

  @ApiProperty({ example: 2936, description: 'Количество подписчиков' })
  @prop()
  subscribers: number;
}
