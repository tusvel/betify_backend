import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class UserModelResponse {
  @ApiProperty({
    example: {
      _id: '6342d3e9295fad6fe6cc4875',
      email: 'user@mail.ru',
    },
    description: 'Почта и id пользователя',
  })
  user: {
    email: string;
    _id: Types.ObjectId;
  };

  @ApiProperty({
    example: 'sdfhusdhf9.sdfj98sdf.sfdji80sdf',
    description: 'Refresh токен',
  })
  refreshToken: string;

  @ApiProperty({
    example: 'sfdj0i8sdf.sdf98489s.f904nssff8',
    description: 'Access токен',
  })
  accessToken: string;
}

export class TokensResponse {
  @ApiProperty({
    example: 'sdfhusdhf9.sdfj98sdf.sfdji80sdf',
    description: 'Refresh токен',
  })
  refreshToken: string;

  @ApiProperty({
    example: 'sfdj0i8sdf.sdf98489s.f904nssff8',
    description: 'Access токен',
  })
  accessToken: string;
}
