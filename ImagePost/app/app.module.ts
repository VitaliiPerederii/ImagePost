import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

import 'hammerjs';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [AppComponent, LoginComponent],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }