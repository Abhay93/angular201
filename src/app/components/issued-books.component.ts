import { Component, OnInit } from '@angular/core';
import { Book } from '../classes/book';
import { BookService} from '../services/book.service'

@Component ({
    selector: "issued-books",
    templateUrl: '../templates/issued-books.template.html',
    styleUrls: ['../scss/user.component.scss']
    
})

export class IssuedBooksComponent implements OnInit {
    books: Book[] = [];
    
    constructor(private bookService: BookService) { }

    ngOnInit(): void {
    this.bookService.getBooks()
        .then(book => this.books = book.slice(1, 5));
    }
}
