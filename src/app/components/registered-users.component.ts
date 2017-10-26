import { Component } from '@angular/core';

import { Book } from '../classes/book';
import { BookService} from '../services/book.service'


@Component ({
    selector: "regsitered-users",
    templateUrl: '../templates/book-list.template.html',
    styleUrls: ['../scss/admin.component.scss']
})

export class RegisteredUsersComponent {
    constructor() { }
    
    ngOnInit(): void {
    }

    
}
