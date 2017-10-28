import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'selected-book',
  templateUrl: '../templates/selected-book.template.html',
  styleUrls: ['../scss/app.component.scss']
  
  
})
export class SelectedBookComponent implements OnInit {
  book: Book;
  username: string;
  previousRoute: string; 
  isAdmin: boolean;
  isIssued: boolean;
  issueSuccess: boolean;
  returnSuccess: boolean;

  constructor(
    private bookService: BookService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.userService.getInitUser().username;
      this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
      .subscribe(book => this.book = book);
      this.previousRoute = this.router.url.split("/")[2];
      if(this.router.url.split("/")[1] === "admin") this.isAdmin = true;
      this.userService.getIssuedBooks(this.username).then(ids => {
        var issuedBookIds = ids;
        for(let id of issuedBookIds) {
          if(this.book.id == id) {
            this.isIssued = true;
            break;
          }  
        }
      })

  }

  issueBook(book: Book) {
    this.userService.issueBook(book);
    this.issueSuccess = true;
  }

  returnBook(book: Book) {
    this.userService.returnBook(book.id);
    this.returnSuccess = true;
  }

  updateBook(title, author, copies, description): void {
    console.log(title)

  }

  goBack(): void {
    this.location.back();
  }
}