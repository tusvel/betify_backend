import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './decorators/user.decorator';
import { Types } from 'mongoose';
import { IdValidationPipe } from '../pipes/id.validation.pipe';
import { Auth } from '../auth/decorators/auth.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Подписка на пользователя' })
  @ApiResponse({ status: 200, type: null })
  @HttpCode(200)
  @Put('subscriptions')
  @Auth()
  async subscribe(
    @User('_id') _id: Types.ObjectId,
    @Body('userId', IdValidationPipe) userId: Types.ObjectId,
  ) {
    return this.userService.subscribe(_id, userId);
  }

  @ApiOperation({ summary: 'Добавить трек в историю' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Put('history')
  @Auth()
  async history(
    @User('_id') _id: Types.ObjectId,
    @Body('trackId', IdValidationPipe) trackId: Types.ObjectId,
  ) {
    return this.userService.addHistory(_id, trackId);
  }

  @ApiOperation({ summary: 'Like track' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Put('like_track')
  @Auth()
  async like_track(
    @User('_id') _id: Types.ObjectId,
    @Body('trackId', IdValidationPipe) trackId: Types.ObjectId,
  ) {
    return this.userService.like_track(_id, trackId);
  }

  @ApiOperation({ summary: 'Dislike track' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Put('dislike_track')
  @Auth()
  async dislike_track(
    @User('_id') _id: Types.ObjectId,
    @Body('trackId', IdValidationPipe) trackId: Types.ObjectId,
  ) {
    return this.userService.dislike_track(_id, trackId);
  }
}
