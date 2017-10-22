import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login.component';
import { UserComponent } from './components/user.component';
import { BooksComponent } from './components/books.component';
import { IssuedBooksComponent } from './components/issued-books.component';
import { RecommendedBooksComponent } from './components/recommended-books.componnent';
import { SelectedBookComponent } from './components/selected-book.component';
import { ProfileComponent } from './components/profile.component';
import { AdminComponent } from './components/admin.component';
import { BookListComponent } from './components/book-list.component';
import { AddBookComponent } from './components/add-book.component';



import { BookService} from './services/book.service'
import { UserService} from './services/user.service'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    BooksComponent,
    SelectedBookComponent,
    IssuedBooksComponent,
    RecommendedBooksComponent,
    ProfileComponent,
    AdminComponent,
    BookListComponent,
    AddBookComponent
  ],
  providers: [BookService, UserService],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      //  {
      //    path: '',
      //    redirectTo: '/login',
      //    pathMatch: 'full'
      //  },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: '',
            redirectTo: 'books',
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
            component: ProfileComponent
          },
          {
            path: 'detail/:id',
            component: SelectedBookComponent
          },
        ]
      },
      {
        path: 'logout',
        component: LoginComponent
      },  
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'list-books',
            pathMatch: 'full'
          },
          {
            path: 'list-books',
            component: BookListComponent
          },
          {
            path: 'add-book',
            component: AddBookComponent
          },    
          {
            path: 'detail/:id',
            component: SelectedBookComponent
          },
          {
            path: 'edit/:id',
            component: SelectedBookComponent
          },
    
        ]
      },

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
