import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { User} from './classes/user'
import { UserService} from './services/user.service'


@Component ({
    selector: "my-app",
    templateUrl: './app.template.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(private router: Router) { }
    ngOnInit() {
        this.router.navigate(['/login']);   
    }
}
