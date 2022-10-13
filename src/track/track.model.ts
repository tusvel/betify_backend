import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';
import { GenreModel } from '../genre/genre.model';

export interface TrackModel extends Base {}

export class TrackModel extends TimeStamps {
  @ApiProperty({ example: 'tusvel', description: 'Название трека' })
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
  @prop({ default: 0 })
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

  @ApiProperty({
    example: '[63050d45102bc8b42918e61b, 6305dce76af92ec80101fafe]',
    description: 'Жанры трека',
  })
  @prop({ ref: () => GenreModel })
  genres: Ref<GenreModel>[];
}
