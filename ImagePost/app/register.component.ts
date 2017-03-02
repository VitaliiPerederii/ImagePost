import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    constructor(private loginService: LoginService, private router: Router) { }

    private userName = '';
    private password = '';
    private comfirmPassword = '';

    register(): void {
        this.loginService.register(this.userName, this.password)
            .then(result => {
                if (result.Success) {
                    this.router.navigate(['/feed']);
                } else {
                    alert(result.Message);
                }
            });
    }
}