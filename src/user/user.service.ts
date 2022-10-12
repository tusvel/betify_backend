import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
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

  async like() {}

  async dislike() {}

  async addHistory(_id: Types.ObjectId, trackId: Types.ObjectId) {
    const user = await this.UserModel.findById(_id);

    if (user.history.pop() === trackId) {
      return false;
    }

    user.history = [...user.history, trackId];
    await user.save();
  }
}
