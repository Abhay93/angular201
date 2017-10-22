import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'selected-book',
  templateUrl: '../templates/selected-book.template.html',
  styleUrls: ['../scss/user.component.scss']
  
  
})
export class SelectedBookComponent implements OnInit {
  book: Book;
  previousRoute: string;  

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
      .subscribe(book => this.book = book);
      this.previousRoute = this.router.url.split("/")[2];
  }

  issueBook(book: Book) {
    console.log(book)
  }

  goBack(): void {
    this.location.back();
  }
}