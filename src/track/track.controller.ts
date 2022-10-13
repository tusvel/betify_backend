import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { Types } from 'mongoose';
import { User } from '../user/decorators/user.decorator';
import { TrackModel } from './track.model';

@ApiTags('Track')
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @ApiOperation({ summary: 'Создать трек' })
  @ApiResponse({ status: 200, type: TrackModel })
  @Post('create')
  @HttpCode(200)
  @Auth()
  async create(@User('_id') _id: Types.ObjectId, @Body() dto: CreateTrackDto) {
    return this.trackService.create(_id, dto);
  }
}
