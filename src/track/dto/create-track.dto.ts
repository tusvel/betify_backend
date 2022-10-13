import { IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrackDto {
  @ApiProperty({ example: 'Captio', description: 'Название трека' })
  @IsString()
  name: string;

  @ApiProperty({ example: '231', description: 'Продолжительность трека' })
  @IsNumber()
  duration: number;

  @ApiProperty({
    example: '/uploads/track/capitao.png',
    description: 'Картинка трека',
  })
  @IsString()
  picture: string;

  @ApiProperty({
    example: '/uploads/track/capitao.mp3',
    description: 'Аудио трека',
  })
  @IsString()
  audio: string;

  @ApiProperty({
    example: '[63050d45102bc8b42918e61b, 6305dce76af92ec80101fafe]',
    description: 'Жанры трека',
  })
  @IsArray()
  @IsString({ each: true })
  genres: string[];
}
