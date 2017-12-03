import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'

import { User } from '../classes/user';
import { UserService} from '../services/user.service'


@Component ({
    selector: "regsitered-users",
    templateUrl: './registered-users.template.html',
    styleUrls: ['./admin.component.scss']
})

export class RegisteredUsersComponent {
    users: User[];
    books: Book[] = [];
    
    constructor(private bookService: BookService, private userService: UserService) {      
    };
    
    ngOnInit(): void {
        this.userService.getUsers().then(users => this.users = users);
        this.bookService.getBooks().then(books => this.books = books);
   }
}
