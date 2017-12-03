import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User} from '../classes/user'
import { UserService} from '../services/user.service'

@Component ({
    selector: "login",
    templateUrl: './login.template.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    user: User;
    errorMessage: string;
    constructor(private userService: UserService, private router: Router) { }
    login(username: string, password:string): void{
        this.userService.getUser(username).then(user => {
            this.user = user;
            if(this.user != undefined && password === this.user.password){
                this.userService.initUser(this.user);
                if(this.user.role === "user"){
                    this.router.navigate(['/user']); 
                } else {
                    this.router.navigate(['/admin'])
                }
            }
            else {
                this.router.navigate(['/login'])
                this.errorMessage = "Failed to Login"
            }
        }, error => {
            this.errorMessage = "Failed to Login"
            console.log(error)
        })
    }
    logout(){
        this.router.navigate(['/user']);        
    }
    
}
