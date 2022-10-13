import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { User } from '../user/decorators/user.decorator';
import { Types } from 'mongoose';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlaylistModel } from './playlist.model';

@ApiTags('Playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @ApiOperation({ summary: 'Создание плейлиста' })
  @ApiResponse({ status: 200, type: PlaylistModel })
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(
    @User('_id') _id: Types.ObjectId,
    @Body() dto: CreatePlaylistDto,
  ) {
    return this.playlistService.create(_id, dto);
  }

  @ApiOperation({ summary: 'Редактирование плейлиста' })
  @ApiResponse({ status: 200, type: PlaylistModel })
  @HttpCode(200)
  @Put()
  @Auth()
  async update(
    @User('_id') _id: Types.ObjectId,
    @Body() dto: CreatePlaylistDto,
  ) {
    return this.playlistService.create(_id, dto);
  }

  @ApiOperation({ summary: 'Действие с треком' })
  @ApiResponse({ status: 200, type: PlaylistModel })
  @HttpCode(200)
  @Put('track')
  @Auth()
  async track(@Body() { trackId, playlistId }) {
    return this.playlistService.track(trackId, playlistId);
  }
}
