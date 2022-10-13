import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { TrackModel } from '../track/track.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      { typegooseClass: UserModel, schemaOptions: { collection: 'User' } },
    ]),
    TypegooseModule.forFeature([
      { typegooseClass: TrackModel, schemaOptions: { collection: 'Track' } },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
