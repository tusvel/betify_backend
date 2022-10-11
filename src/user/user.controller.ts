import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './decorators/user.decorator';
import { Types } from 'mongoose';
import { IdValidationPipe } from '../pipes/id.validation.pipe';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put('subscriptions')
  @HttpCode(200)
  @Auth()
  async subscribe(
    @User('_id') _id: Types.ObjectId,
    @Body('userId', IdValidationPipe) userId: Types.ObjectId,
  ) {
    return this.userService.subscribe(_id, userId);
  }
}
