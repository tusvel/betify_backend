import { Controller } from '@nestjs/common';
import { MusicianService } from './musician.service';

@Controller('musician')
export class MusicianController {
  constructor(private readonly musicianService: MusicianService) {}
}
