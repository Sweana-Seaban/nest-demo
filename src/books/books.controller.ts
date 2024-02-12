import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(@Query('genre') genre: 'tragedy' | 'fiction') {
    // const service = new BooksService();
    return this.booksService.getBooks(genre);
  }

  @Get(':id')
  getOneBook(@Param('id') id: number) {
    return this.booksService.getBook(+id);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.updateBook(+id, updateBookDto);
  }

  @Delete(':id')
  removeBook(@Param('id') id: string) {
    return this.booksService.removeBook(+id);
  }
}
