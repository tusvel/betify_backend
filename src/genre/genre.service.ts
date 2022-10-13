import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { GenreModel } from './genre.model';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(GenreModel) private readonly GenreModel: ModelType<GenreModel>,
  ) {}

  async create(_id: string, dto: CreateGenreDto) {
    return await this.GenreModel.create({
      name: dto.name,
      slug: dto.slug,
      description: dto.description,
      icon: dto.icon,
    });
  }
}
