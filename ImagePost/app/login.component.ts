import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private loginService: LoginService) { }

    userName = '';
    password = '';

    login(): void {
        this.loginService.login(this.userName, this.password)
            .then(result => {
                if (!result.Success) {
                    alert(result.Message);
                }

            });
    }
}