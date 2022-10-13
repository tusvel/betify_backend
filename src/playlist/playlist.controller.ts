import { Body, Controller, HttpCode, Post, Put } from '@nestjs/common';
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
  @Post()
  @HttpCode(200)
  @Auth()
  async create(
    @User('_id') _id: Types.ObjectId,
    @Body() dto: CreatePlaylistDto,
  ) {
    return this.playlistService.create(_id, dto);
  }

  @ApiOperation({ summary: 'Редактирование плейлиста' })
  @ApiResponse({ status: 200, type: PlaylistModel })
  @Put()
  @HttpCode(200)
  @Auth()
  async update(
    @User('_id') _id: Types.ObjectId,
    @Body() dto: CreatePlaylistDto,
  ) {
    return this.playlistService.create(_id, dto);
  }

  @ApiOperation({ summary: 'Действие с треком' })
  @ApiResponse({ status: 200, type: PlaylistModel })
  @Put('track')
  @HttpCode(200)
  @Auth()
  async track(@Body() { trackId, playlistId }) {
    return this.playlistService.track(trackId, playlistId);
  }
}
