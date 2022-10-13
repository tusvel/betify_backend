import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { TrackModel } from '../track/track.model';
import { CommentModel } from './comment.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CommentModel,
        schemaOptions: { collection: 'Comment' },
      },
    ]),
    TypegooseModule.forFeature([
      { typegooseClass: TrackModel, schemaOptions: { collection: 'Track' } },
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
