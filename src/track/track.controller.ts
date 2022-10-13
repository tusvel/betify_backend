import {
  Body,
  Controller,
  HttpCode,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  async create(@User('_id') _id: Types.ObjectId, @Body() dto: CreateTrackDto) {
    return this.trackService.create(_id, dto);
  }

  @ApiOperation({ summary: 'Увеличить кол-во прослушиваний' })
  @ApiResponse({ status: 200, type: TrackModel })
  @HttpCode(200)
  @Put('update-count-listens')
  async updateCountListens(@Body('trackId') trackId: Types.ObjectId) {
    return this.trackService.updateCountListens(trackId);
  }
}
