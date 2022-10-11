import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';
import { TrackModel } from '../track/track.model';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @ApiProperty({ example: 'tusvel', description: 'Username пользователя' })
  @prop()
  name: string;

  @ApiProperty({ example: 'tusvel@yandex.ru', description: 'Почтовый адрес' })
  @prop({ unique: true })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @prop()
  password: string;

  @ApiProperty({ example: 2936, description: 'Количество подписчиков' })
  @prop()
  subscribers: number;

  @ApiProperty({ example: [98346923936, 47375437865], description: 'Треки' })
  @prop({ ref: () => TrackModel })
  tracks: Ref<TrackModel>[];
}
