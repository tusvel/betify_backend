import { Injectable } from '@nestjs/common';
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
      name: dto.name,
      duration: dto.duration,
      picture: dto.picture,
      audio: dto.audio,
      user_id: _id,
    });
    return await newTrack.save();
  }
}
