import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookservice: BooksService) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe(
      payload => {
        this.books = payload
      }
    )
  }

}
