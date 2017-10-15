import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from '../components/books.component';
import { IssuedBooksComponent } from '../components/issued-books.component';
import { SelectedBookComponent } from '../components/selected-book.component';

const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books',  component: BooksComponent },
    { path: 'detail/:id', component: SelectedBookComponent },
    { path: 'issued',     component: IssuedBooksComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}