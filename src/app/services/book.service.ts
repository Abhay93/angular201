import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Book } from '../classes/Book';
import { BOOKS} from '../data/mock-books';

@Injectable()
export class BookService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private booksUrl = 'assets/mock-data/books.json';
    books: Book[];
    indexOfBook: number;
    constructor(private http: Http) {
      this.http.get('assets/mock-data/books.json')
        .map(res => res.json())
        .subscribe(data => this.books = data,
                    err => console.log(err),
                    () => console.log('Completed laoding books'));
    };

    getBooks(): Promise<Book[]> {
        console.log(this.books);
        return Promise.resolve(this.books);
        // return Promise.resolve(BOOKS);
        
      }

    searchBooks(searchTerm: string) {
        return this.getBooks().
                then(books => books.filter(book => (
                    book.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1 ||
                    book.author.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1)))
    }

    getBook(id: number): Promise<Book> {
        return this.getBooks()
                .then(books => books.find(book => book.id === id));
    }

    deleteBook(book: Book): void {
        console.log("index"+this.indexOfBook)     
    }

    updateBook(book: Book): void {
    //     return this.http
    //       .put(this.booksUrl, JSON.stringify(book), {headers: this.headers})
    //       .toPromise()
    //       .then(() => book);
      }

    
}