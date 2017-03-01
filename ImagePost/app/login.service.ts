import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    login(username: string, password: string): Promise<any> {
        return this.http.post('account/login', { Email: username, Password: password })
            .toPromise()
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));
    }
}