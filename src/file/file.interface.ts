import { ApiProperty } from '@nestjs/swagger';

export interface FileResponse {}

export class FileResponse {
  @ApiProperty({
    example: '/uploads/track/capitao.png',
    description: 'Путь к файлу',
  })
  url: string;

  @ApiProperty({
    example: 'capitao.png',
    description: 'Название файла',
  })
  name: string;
}
