import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks() {
    return [];
  }

  @Get(':id')
  getOneBook() {
    return {};
  }

  @Post()
  createBook() {
    return {};
  }

  @Put(':id')
  updateBook() {
    return {};
  }

  @Delete(':id')
  removeBook() {
    return {};
  }
}
