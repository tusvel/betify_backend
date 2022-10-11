import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { PlaylistModel } from './playlist.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PlaylistModel,
        schemaOptions: { collection: 'Playlist' },
      },
    ]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
