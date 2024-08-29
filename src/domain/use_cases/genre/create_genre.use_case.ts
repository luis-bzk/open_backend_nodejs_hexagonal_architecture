import { Genre } from '../../entities';
import { CreateGenreDto } from '../../dtos/genre';
import { GenreRepository } from '../../repositories';

interface CreateGenreUseCase {
  execute(createGenreDto: CreateGenreDto): Promise<Genre>;
}

export class CreateGenre implements CreateGenreUseCase {
  private readonly genreRepository: GenreRepository;

  constructor(genreRepository: GenreRepository) {
    this.genreRepository = genreRepository;
  }

  async execute(createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreRepository.create(createGenreDto);
  }
}
