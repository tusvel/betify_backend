import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';

export interface CommentModel extends Base {}

export class CommentModel extends TimeStamps {
  @ApiProperty({
    example: '63481970234f528797ceebc4',
    description: 'Владелец комментария',
  })
  @prop()
  user_id: string;

  @ApiProperty({
    example: '63481970234f528797ceebc4',
    description: 'Текст комментария',
  })
  @prop()
  text: string;
}
