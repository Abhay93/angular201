import { Component, Input } from '@angular/core';

import { User} from '../classes/user'
import { UserService} from '../services/user.service'

@Component ({
    selector: "user",
    templateUrl: '../templates/profile.template.html',
    styleUrls: ['../scss/app.component.scss']
})

export class ProfileComponent {
    user: User;
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user = this.userService.getInitUser();
    }
    
}
