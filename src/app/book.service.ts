import { Injectable } from '@angular/core';
import { Book } from './books/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private http: HttpClient){}

  getBooks(): Observable<any> {
    const data = this.http.get
    ('http://localhost:8082/api/books')
    return data
  }

  deleteBook(id: number):Observable<any> {
    return this.http.delete(`http://localhost:8082/api/books/${id}`)
  }

  // createBook(book: Book) :Observable<any> {
  //   return this.http.post(`http://localhost:8082/api/books`, 




  
  
  }


  

