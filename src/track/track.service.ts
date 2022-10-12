import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { TrackModel } from './track.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(TrackModel) private readonly TrackModel: ModelType<TrackModel>,
  ) {}

  /*  async create(dto: ) {

  }*/
}
