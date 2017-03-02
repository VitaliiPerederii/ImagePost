import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    private firstUse: boolean = true;
    userName: string = null;

    login(username: string, password: string): Promise<any> {
        return this.authBase('account/login', username, password);
    }

    logout(): Promise<any> {
        return this.http.post('account/logoff', { })
            .toPromise()
            .then(response => {
                this.userName = null;
                return response.json()
            })
            .catch(error => Promise.reject(error.message || error));
    }

    register(username: string, password: string): Promise<any> {
        return this.authBase('account/register', username, password);
    }

    private authBase(url: string, username: string, password: string) {
        return this.http.post(url, { Email: username, Password: password })
            .toPromise()
            .then(response => {
                let data: any = response.json();
                if (data.Success) {
                    this.userName = username;
                }
                return data;
            })
            .catch(error => Promise.reject(error.message || error));
    }


    isAuthenticated(): Promise<boolean> {

        if (this.firstUse) {
            this.firstUse = false;
            return this.http.get('account/username')
                .toPromise()
                .then(response => {
                    this.userName = response.json().Data;
                    return this.userName != null;
                })
                .catch(error => Promise.reject(error.message || error));
        } else {
            return Promise.resolve(this.userName != null);
        }
    }

}