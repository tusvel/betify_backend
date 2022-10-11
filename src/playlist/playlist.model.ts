import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ApiProperty } from '@nestjs/swagger';
import { TrackModel } from '../track/track.model';

export interface PlaylistModel extends Base {}

export class PlaylistModel extends TimeStamps {
  @ApiProperty({ example: 'best music', description: 'Название плейлиста' })
  @prop()
  name: string;

  @ApiProperty({ example: 1240, description: 'Лайки' })
  @prop()
  likes: number;

  @ApiProperty({ example: 58, description: 'Дизлайки' })
  @prop()
  dislikes: number;

  @ApiProperty({ example: [98346923936, 47375437865], description: 'Треки' })
  @prop({ ref: () => TrackModel })
  tracks: Ref<TrackModel>[];
}
