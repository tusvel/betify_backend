import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'Классный трек!',
    description: 'Текст комментария',
  })
  @IsString()
  text: string;
}
