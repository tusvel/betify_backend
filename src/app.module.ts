import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoDbConfig } from './config/mongo.config';
import { TrackModule } from './track/track.module';
import { PlaylistModule } from './playlist/playlist.module';
import { FileModule } from './file/file.module';
import { GenreModule } from './genre/genre.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig,
    }),
    AuthModule,
    UserModule,
    TrackModule,
    PlaylistModule,
    FileModule,
    GenreModule,
    CommentModule,
  ],
})
export class AppModule {}
