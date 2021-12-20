import { Component } from '@angular/core';
import { BooksService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

  books: BooksService[] = [];

  constructor(private bookService: BooksService){}
}

// getBooks(): void {
//   this.books = this.bookservice.getAllBooks()
// }