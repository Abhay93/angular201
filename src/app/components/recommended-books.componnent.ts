import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from '../classes/user';
import { UserService} from '../services/user.service'
import { Book } from '../classes/book';
import { BookService} from '../services/book.service'

@Component({
  selector: 'books',
  templateUrl: '../templates/books.template.html',
  styleUrls: ['../scss/book.component.scss']
})


export class RecommendedBooksComponent {
    searchForm = new FormGroup({
        searchControl : new FormControl()
      })
    
}
