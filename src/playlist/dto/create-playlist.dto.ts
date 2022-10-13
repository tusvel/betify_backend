import { IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaylistDto {
  @ApiProperty({ example: 'Captio', description: 'Название плейлиста' })
  @IsString()
  name: string;

  @ApiProperty({
    example: '6345d4ea0fca8b0ec491ebe9',
    description: 'Кому принадлежит плейлист',
  })
  @IsString()
  user_id: string;

  @ApiProperty({
    example: '[63050d45102bc8b42918e61b, 6305dce76af92ec80101fafe]',
    description: 'Треки плейлиста',
  })
  @IsArray()
  @IsString({ each: true })
  tracks: string[];

  @ApiProperty({
    example: '/uploads/playlist/capitao.png',
    description: 'Картинка плейлиста',
  })
  @IsString()
  picture: string;
}
