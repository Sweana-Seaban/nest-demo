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
  @Get()
  getBooks(@Query('genre') genre: 'tragedy' | 'fiction') {
    const service = new BooksService();
    return service.getBooks(genre);
  }

  @Get(':id')
  getOneBook(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return {
      name: createBookDto.name,
    };
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return {
      id,
      name: updateBookDto,
    };
  }

  @Delete(':id')
  removeBook() {
    return {};
  }
}
