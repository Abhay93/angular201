import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'

@Component({
  selector: 'books',
  templateUrl: '../templates/books.template.html',
  styleUrls: ['../scss/book.component.scss']
})


export class BooksComponent implements OnInit {

  books: Book[];
  filteredBooks: Book[];
  filter: boolean = false;
  searchResults: Book[];
  searchFlag: boolean = false;
  selectedBook: Book;
  searchForm = new FormGroup({
    searchControl : new FormControl()
  })

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.filteredBooks = this.books;
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
    console.log(this.books)
  }

  goToBook(book: Book): void {
    this.selectedBook = book;
    console.log("ABHAY"+this.selectedBook)
    this.router.navigate(['/detail', this.selectedBook.id]);
  }
  
  
  filterBooks(genre: string) {
    this.filteredBooks = this.books.filter( book => book.genre === genre);
    this.filter = true;
  }

  searchBook(searchTerm: string): void {
    this.bookService.searchBooks(searchTerm).then(books => this.searchResults = books);
    this.searchFlag = true;
  }
}
