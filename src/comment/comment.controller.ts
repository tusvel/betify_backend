import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { User } from '../user/decorators/user.decorator';
import { Types } from 'mongoose';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrackModel } from '../track/track.model';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: 'Добавить комментарий' })
  @ApiResponse({ status: 200, type: TrackModel })
  @Post()
  @HttpCode(200)
  @Auth()
  async create(@User('_id') _id: Types.ObjectId, @Body() { text, trackId }) {
    return this.commentService.create(_id, text, trackId);
  }
}
