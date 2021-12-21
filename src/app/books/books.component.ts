import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BooksService } from '../book.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  newBook: any = {
    title: "",
    author: "",

  }

  
  show = false;
  showCreate = false;


  

  

  constructor(private bookservice: BooksService) { }


  

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe(
      payload => {
        this.books = payload
      }
    )
  }

  onDeleteBook(id: number) {
    this.bookservice.deleteBook(id).subscribe(
      (res) => {
        console.log(res)
        // console.log (this.bookservice.getBooks())
      }
    )
    this.ngOnInit()
  }

 onCreateBook(newBook: any) {
   this.bookservice.createBook(newBook).subscribe(
     (res) => console.log(res)
   )
   this.ngOnInit()
 }

 onUpdateBook(id:number, newBook:any) {
   this.bookservice.updateBook(id, newBook).subscribe(
     (res) => console.log(res)
   )
   this.ngOnInit()
 }

//  showUpdateDiv() {
//    console.log("clicked")
//  }

 



}
