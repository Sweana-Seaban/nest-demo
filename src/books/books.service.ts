import { Injectable } from '@nestjs/common';

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
}
