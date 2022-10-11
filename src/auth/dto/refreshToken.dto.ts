import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    example: 'sdfhusdhf9.sdfj98sdf.sfdji80sdf',
    description: 'Refresh токен',
  })
  @IsString({
    message: 'You did not pass refresh token or it is not a string!',
  })
  refreshToken: string;
}
