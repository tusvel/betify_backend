import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GenreModel } from './genre.model';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @ApiOperation({ summary: 'Создать жанр' })
  @ApiResponse({ status: 200, type: GenreModel })
  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(200)
  @Auth()
  async create(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto);
  }
}
