import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FeedComponent } from './feed.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './register.component';


import 'hammerjs';

const routes: Routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [AppComponent, LoginComponent, FeedComponent, RegisterComponent],
    providers: [LoginService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }