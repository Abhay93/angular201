import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './book/books.component';
import { IssuedBooksComponent } from './book/issued-books.component';
import { SelectedBookComponent } from './book/selected-book.component';
import { ProfileComponent } from './user/profile.component';
import { AdminComponent } from './admin/admin.component';
import { RegisteredUsersComponent } from './admin/registered-users.component';

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
    ProfileComponent,
    AdminComponent,
    RegisteredUsersComponent
  ],
  providers: [BookService, UserService],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
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
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'edit',
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
            redirectTo: 'books',
            pathMatch: 'full'
          },
          {
            path: 'books',
            component: BooksComponent
          },
          {
            path: 'add-book',
            component: BooksComponent
          },    
          {
            path: 'detail/:id',
            component: SelectedBookComponent
          },
          {
            path: 'edit/:id',
            component: SelectedBookComponent
          },
          {
            path: 'listUsers',
            component: RegisteredUsersComponent
          },
          {
            path: 'profile',
            component: ProfileComponent,
          },
          {
            path: 'edit',
            component: ProfileComponent
          }
        ]
      },

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
