import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { CommentModel } from './comment.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { TrackModel } from '../track/track.model';
import { Types } from 'mongoose';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(CommentModel)
    private readonly CommentModel: ModelType<CommentModel>,
    @InjectModel(TrackModel)
    private readonly TrackModel: ModelType<TrackModel>,
  ) {}

  async create(_id: Types.ObjectId, text: string, trackId: Types.ObjectId) {
    const track = await this.TrackModel.findById(trackId);
    const comment = await this.CommentModel.create({
      user_id: _id,
      text: text,
    });
    track.comments.push(comment._id);
    return await track.save();
  }
}
