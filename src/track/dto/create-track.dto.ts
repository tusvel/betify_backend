import { IsNumber, IsString } from 'class-validator';
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
}
