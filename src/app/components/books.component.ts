import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'

@Component({
  selector: 'books',
  templateUrl: '../templates/books.template.html',
  styleUrls: ['../scss/user.component.scss']
})


export class BooksComponent implements OnInit {

  books: Book[];
  filteredBooks: Book[];
  filter: boolean = false;
  searchResults: Book[];
  searchFlag: boolean = false;
  selectedBook: Book;
  previousRoute: string;
  listBooks: boolean;
  addBookFlag: boolean;
  newBook: Book;
  searchForm = new FormGroup({
    searchControl : new FormControl()
  })

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.filteredBooks = this.books;
    this.previousRoute = this.router.url.split("/")[1];
    if(this.previousRoute === "admin") this.listBooks = true
    if(this.router.url.split("/")[2] === "add-book") { this.addBookFlag = true; this.listBooks = false;}
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  goToBook(book: Book): void {
    this.selectedBook = book;
    this.router.navigate(['/user/detail', this.selectedBook.id]);
  }
  
  
  filterBooks(genre: string) {
    this.filteredBooks = this.books.filter( book => book.genre === genre);
    this.filter = true;
  }

  searchBook(searchTerm: string): void {
    this.bookService.searchBooks(searchTerm).then(books => this.searchResults = books);
    this.searchFlag = true;
  }

  addBook(title:string, author:string, description:string, ISBN: number): void {
    this.newBook = new Book;
    this.newBook.title = title;
    this.newBook.author = author;
    this.newBook.description = description;
    this.newBook.ISBN = ISBN;
    this.books.push(this.newBook);

  }

  deleteBook(book: Book): void {
    this.books.splice(this.books.indexOf(book),1);
  }
}
