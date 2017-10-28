import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'
import { UserService} from '../services/user.service'

@Component ({
    selector: "issued-books",
    templateUrl: '../templates/issued-books.template.html',
    styleUrls: ['../scss/app.component.scss']
    
})

export class IssuedBooksComponent implements OnInit {
    books: Book[] = [];
    bookIDs: number[];
    username: string
    searchForm = new FormGroup({
        searchControl : new FormControl()
      })
    
    constructor(private bookService: BookService, private route: Router, private userService: UserService) { }

    ngOnInit(): void {
        this.username = this.userService.getInitUser().username;
        this.userService.getIssuedBooks(this.username)
        .then(ids => {
            this.bookIDs = ids;
            for(let id of this.bookIDs){
                this.bookService.getBook(id)
                .then(book => {
                    this.books.push(book)
                    })
            }
            })

        
    }
}
