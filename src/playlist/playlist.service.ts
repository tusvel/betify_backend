import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { PlaylistModel } from './playlist.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Types } from 'mongoose';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(PlaylistModel)
    private readonly PlaylistModel: ModelType<PlaylistModel>,
  ) {}

  async create(_id: Types.ObjectId, dto: CreatePlaylistDto) {
    return await this.PlaylistModel.create({
      ...dto,
      user_id: _id,
    });
  }

  async update(_id: Types.ObjectId, dto: CreatePlaylistDto) {
    const updateDoc = await this.PlaylistModel.findByIdAndUpdate(_id, dto, {
      new: true,
    }).exec();
    if (!updateDoc) throw new NotFoundException('Playlist not found');
    return updateDoc;
  }

  async track(trackId: Types.ObjectId, playlistId: Types.ObjectId) {
    const playlist = await this.PlaylistModel.findById(playlistId);

    if (String(playlist.tracks).includes(String(trackId))) {
      playlist.tracks = playlist.tracks.filter(
        (id) => String(id) !== String(trackId),
      );
      return await playlist.save();
    }

    playlist.tracks = [...playlist.tracks, trackId];
    return await playlist.save();
  }
}
