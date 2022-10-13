import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TrackModel } from './track.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTrackDto } from './dto/create-track.dto';
import { Types } from 'mongoose';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(TrackModel) private readonly TrackModel: ModelType<TrackModel>,
  ) {}

  async create(_id: Types.ObjectId, dto: CreateTrackDto) {
    const newTrack = await new this.TrackModel({
      ...dto,
      user_id: _id,
    });
    return await newTrack.save();
  }

  async updateCountListens(trackId: Types.ObjectId) {
    const updateDoc = await this.TrackModel.findByIdAndUpdate(
      trackId,
      {
        $inc: { listens: 1 },
      },
      { new: true },
    ).exec();
    if (!updateDoc) throw new NotFoundException('Movie not found');
    return updateDoc;
  }
}
