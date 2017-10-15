import { Component } from '@angular/core';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'


@Component ({
    selector: "admin",
    templateUrl: '../templates/admin.template.html',
    styleUrls: ['../scss/admin.component.scss']
})

export class AdminComponent {
    books: Book[];
    selectedBook : Book;
    constructor(private bookService: BookService) { }
    
    ngOnInit(): void {
        this.getBooks();
    }
    
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
        console.log(this.books)
    }

    deleteBook(book: Book): void {
        console.log(book)
        this.bookService.deleteBook(book);
        this.getBooks()
    }

    updateBook(book: Book): void {
        console.log(book)
        this.bookService.updateBook(book);
        this.getBooks()
    }

    
}
