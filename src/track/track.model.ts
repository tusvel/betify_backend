import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';

export interface TrackModel extends Base {}

export class TrackModel extends TimeStamps {
  @ApiProperty({ example: 'tusvel', description: 'Username пользователя' })
  @prop()
  name: string;

  @ApiProperty({ example: 124, description: 'Продолжительность' })
  @prop()
  duration: number;

  @ApiProperty({ example: 124, description: 'Количество прослушиваний' })
  @prop({ default: 0 })
  listens: number;

  @ApiProperty({ example: 1240, description: 'Лайки' })
  @prop({ default: 0 })
  likes: number;

  @ApiProperty({ example: 58, description: 'Дизлайки' })
  @prop()
  dislikes: number;

  @ApiProperty({
    example: '/track/beautifully.jpg',
    description: 'Картинка трека',
  })
  @prop()
  picture: string;

  @ApiProperty({
    example: '/track/beautifully.mp3',
    description: 'Аудио трека',
  })
  @prop()
  audio: string;
}
