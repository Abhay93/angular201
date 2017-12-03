import { Component, OnInit } from '@angular/core';

import { User} from '../classes/user'
import { UserService} from '../services/user.service'

@Component ({
    selector: "user-dashboard",
    templateUrl: './user.template.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent {
    user: User;
    constructor(private userService: UserService) { }
    ngOnInit(): any{
       this.user = this.userService.getInitUser()
    }   
}
