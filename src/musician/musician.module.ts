import { Module } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { MusicianController } from './musician.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { MusicianModel } from './musician.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MusicianModel,
        schemaOptions: { collection: 'Musician' },
      },
    ]),
  ],
  controllers: [MusicianController],
  providers: [MusicianService],
})
export class MusicianModule {}
