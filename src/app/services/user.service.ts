import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../classes/user';
import { Book } from '../classes/book';

@Injectable()
export class UserService {
    user: User;
    users: User[];
    genre: string;
    books: number[];
    constructor(private http: Http) {
        this.http.get('assets/mock-data/users.json')
          .map(res => res.json())
          .subscribe(data => this.users = data,
                      err => console.log(err),
                      () => console.log('Completed loading users'));
      };

    initUser(user: User): void {
        this.user = user;
    }

    getInitUser(){
        return this.user;
    }
    getUsers(): Promise<User[]> {
        console.log(this.user)
        return Promise.resolve(this.users);
      }
    getUser(username: string): Promise<User> {
        return this.getUsers()
                .then(users => users.find(user => user.username === username));
    }

    getIssuedBooks(username: string): Promise<number[]>{
        return this.getUser(username).then(user => this.books = user.issuedBooks)

    }

    issueBook(book: Book): void {
        this.books.push(book.id)
    }
    returnBook(id: number): void {
        this.books.splice(this.books.indexOf(id), 1);
    }
}
