import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty({ example: 'Регги', description: 'Название жанра' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'reggae',
    description: 'Название жанра в стиле слаг',
  })
  @IsString()
  slug: string;

  @ApiProperty({
    example:
      'Регги – это едва ли не самая позитивная музыка после попа. Она отличается неспешным темпом и расслабленным ритмом.',
    description: 'Описание жанра',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 'MdSurfing', description: 'Иконка жанра' })
  @IsString()
  icon: string;
}
