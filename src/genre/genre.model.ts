import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';

export interface GenreModel extends Base {}

export class GenreModel extends TimeStamps {
  @ApiProperty({ example: 'Регги', description: 'Название жанра' })
  @prop()
  name: string;

  @ApiProperty({
    example: 'reggae',
    description: 'Название жанра в стиле слаг',
  })
  @prop()
  slug: string;

  @ApiProperty({
    example:
      'Регги – это едва ли не самая позитивная музыка после попа. Она отличается неспешным темпом и расслабленным ритмом.',
    description: 'Описание жанра',
  })
  @prop()
  description: string;

  @ApiProperty({ example: 'MdSurfing', description: 'Иконка жанра' })
  @prop()
  icon: string;
}
