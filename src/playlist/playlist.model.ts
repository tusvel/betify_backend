import { prop, Ref } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';
import { TrackModel } from '../track/track.model';

export class PlaylistModel extends TimeStamps {
  @ApiProperty({ example: 'best music', description: 'Название плейлиста' })
  @prop()
  name: string;

  @ApiProperty({
    example: '6345d4ea0fca8b0ec491ebe9',
    description: 'Кому принадлежит плейлист',
  })
  user_id: string;

  @ApiProperty({ example: [98346923936, 47375437865], description: 'Треки' })
  @prop({ ref: () => TrackModel })
  tracks: Ref<TrackModel>[];

  @ApiProperty({
    example: '/uploads/playlist/capitao.png',
    description: 'Картинка плейлиста',
  })
  @prop()
  picture: string;

  @ApiProperty({ example: 1240, description: 'Лайки' })
  @prop()
  likes: number;

  @ApiProperty({ example: 58, description: 'Дизлайки' })
  @prop()
  dislikes: number;
}
