import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { TrackModel } from '../track/track.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
    @InjectModel(TrackModel) private readonly TrackModel: ModelType<TrackModel>,
  ) {}

  async subscribe(_id: Types.ObjectId, userId: Types.ObjectId) {
    const user = await this.UserModel.findById(_id);
    const toUser = await this.UserModel.findById(userId);

    if (user.subscriptions.includes(userId)) {
      user.subscriptions = user.subscriptions.filter(
        (id) => String(id) !== String(userId),
      );
      await user.save();

      toUser.subscribers -= 1;
      await toUser.save();
    } else {
      user.subscriptions = [...user.subscriptions, userId];
      await user.save();

      toUser.subscribers += 1;
      await toUser.save();
    }
  }

  async like_track(_id: Types.ObjectId, trackId: Types.ObjectId) {
    const user = await this.UserModel.findById(_id);
    const track = await this.TrackModel.findById(trackId);

    //Если пользователь уже лайкнул трек
    if (user.tracks.includes(trackId)) {
      user.tracks = user.tracks.filter((id) => String(id) !== String(trackId));
      track.likes -= 1;
      return {
        user: await user.save(),
        track: await track.save(),
      };
    }

    //Если пользователь до этого дизлайкнул трек
    if (user.dislikes_tracks.includes(trackId)) {
      user.dislikes_tracks = user.dislikes_tracks.filter(
        (id) => String(id) !== String(trackId),
      );
      track.dislikes -= 1;
      await user.save();
      await track.save();
    }

    user.tracks = [...user.tracks, trackId];
    track.likes += 1;
    return {
      user: await user.save(),
      track: await track.save(),
    };
  }

  async dislike_track(_id: Types.ObjectId, trackId: Types.ObjectId) {
    const user = await this.UserModel.findById(_id);
    const track = await this.TrackModel.findById(trackId);

    //Если пользователь уже дизлайкнул трек
    if (user.dislikes_tracks.includes(trackId)) {
      user.dislikes_tracks = user.dislikes_tracks.filter(
        (id) => String(id) !== String(trackId),
      );
      track.dislikes -= 1;
      return {
        user: await user.save(),
        track: await track.save(),
      };
    }

    //Если пользователь до этого лайкнул трек
    if (user.tracks.includes(trackId)) {
      user.tracks = user.tracks.filter((id) => String(id) !== String(trackId));
      track.likes -= 1;
      track.save();
      await user.save();
    }

    user.dislikes_tracks = [...user.dislikes_tracks, trackId];
    track.dislikes += 1;
    return {
      user: await user.save(),
      track: await track.save(),
    };
  }

  async addHistory(_id: Types.ObjectId, trackId: Types.ObjectId) {
    const user = await this.UserModel.findById(_id);
    const lastElem = user.history.shift();

    if (String(lastElem).includes(String(trackId))) {
      return false;
    } else if (!lastElem) {
      user.history = [trackId];
      await user.save();
      return true;
    }

    user.history = [...user.history, trackId, lastElem];
    await user.save();
    return true;
  }
}
