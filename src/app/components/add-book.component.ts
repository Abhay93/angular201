import { Component } from '@angular/core';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'


@Component ({
    selector: "add-book",
    templateUrl: '../templates/add-book.template.html',
    styleUrls: ['../scss/admin.component.scss']
})

export class AddBookComponent {
    books: Book[];
    selectedBook : Book;
    constructor(private bookService: BookService) { }
    
    ngOnInit(): void {
        this.getBooks();
    }
    
    getBooks(): void {
        this.bookService.getBooks().then(books => this.books = books);
        console.log("ABhay"+this.books)
    }

    deleteBook(book: Book): void {
        this.bookService.deleteBook(book);
        this.getBooks()
    }

    updateBook(book: Book): void {
        this.bookService.updateBook(book);
        this.getBooks()
    }

    
}
