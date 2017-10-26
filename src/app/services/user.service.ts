import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../classes/user';

@Injectable()
export class UserService {
    users: User[];
    constructor(private http: Http) {
        this.http.get('assets/mock-data/users.json')
          .map(res => res.json())
          .subscribe(data => this.users = data,
                      err => console.log(err),
                      () => console.log('Completed loading users'));
      };
    getUsers(): Promise<User[]> {
        return Promise.resolve(this.users);
      }
    getUser(username: string): Promise<User> {
        return this.getUsers()
                .then(users => users.find(user => user.username === username));
    }
}
