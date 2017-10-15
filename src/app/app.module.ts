import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { BooksComponent } from './components/books.component';
import { IssuedBooksComponent } from './components/issued-books.component';
import { RecommendedBooksComponent } from './components/recommended-books.componnent';
import { SelectedBookComponent } from './components/selected-book.component';
import { UserComponent } from './components/user.component';
import { AdminComponent } from './components/admin.component';


import { BookService} from './services/book.service'



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SelectedBookComponent,
    IssuedBooksComponent,
    RecommendedBooksComponent,
    UserComponent,
    AdminComponent
  ],
  providers: [BookService],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'mybooks',
        component: IssuedBooksComponent
      },
      {
        path: 'recommendation',
        component: RecommendedBooksComponent
      },
      {
        path: 'profile',
        component: UserComponent
      },

      {
        path: 'detail/:id',
        component: SelectedBookComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'edit/:id',
        component: SelectedBookComponent
      },

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
