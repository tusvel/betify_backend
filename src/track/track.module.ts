import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { TrackModel } from './track.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      { typegooseClass: TrackModel, schemaOptions: { collection: 'Track' } },
    ]),
  ],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
