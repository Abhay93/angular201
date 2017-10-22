import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { User} from '../classes/user'

@Component ({
    selector: "user",
    templateUrl: '../templates/profile.template.html',
    styleUrls: ['../scss/user.component.scss']
})

export class ProfileComponent {
    constructor(private location: Location) {}
    
    goBack(): void {
        this.location.back();
      }
}
