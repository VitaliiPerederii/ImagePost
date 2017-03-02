import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    constructor(private loginService: LoginService, private router: Router) { }

    logout(): void {
        this.loginService.logout().then(res => {
            this.router.navigate(['/login']);
        })

    }
}