import { IsEnum, MinLength } from 'class-validator';

export class CreateBookDto {
  @MinLength(3)
  name: string;

  @IsEnum(['romantic', 'tragedy'], { message: 'Use correct genre' })
  genre: string;
}
