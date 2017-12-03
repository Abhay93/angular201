import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { User} from '../classes/user'
import { UserService} from '../services/user.service'

@Component ({
    selector: "user",
    templateUrl: './profile.template.html',
    styleUrls: ['./user.component.scss']
})

export class ProfileComponent {
    user: User;
    previousRoute: string;
    updateSuccess: boolean;
    isAdmin: boolean = false;
    constructor(private userService: UserService, private location: Location, private router: Router) {}

    ngOnInit(): void {
        this.user = this.userService.getInitUser();
        this.previousRoute = this.router.url.split("/")[2];
        if(this.router.url.split("/")[1] == "admin") this.isAdmin = true
    }

    updateProfile(email, facebookid): void {
        this.user.email = email;
        this.user.facebookURL = facebookid;
        this.updateSuccess = true;
    }

    goBack(): void {
        this.location.back();
      }
    
}
