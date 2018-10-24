import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    // styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.router.navigateByUrl('/admin/main');
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }

}
