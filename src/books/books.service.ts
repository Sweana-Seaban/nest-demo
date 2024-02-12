import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, name: 'fault in our stars', genre: 'tragedy' },
    { id: 2, name: 'if i stay', genre: 'fiction' },
  ];

  getBooks(genre?: 'tragedy' | 'fiction') {
    if (genre) {
      return this.books.filter((book) => book.genre === genre);
    }

    return this.books;
  }

  getBook(id: number) {
    const book = this.books.find((book) => book.id === id);

    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }

  createBook(createBookDto: CreateBookDto) {
    const newBook = {
      ...createBookDto,
      id: Date.now(),
    };
    this.books.push(newBook);

    return newBook;
  }

  updateBook(id: number, updateBookDto: UpdateBookDto) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updateBookDto };
      }

      return book;
    });

    return this.getBook(id);
  }

  removeBook(id: number) {
    const toBeRemoved = this.getBook(id);

    this.books = this.books.filter((book) => book.id !== id);

    return toBeRemoved;
  }
}
