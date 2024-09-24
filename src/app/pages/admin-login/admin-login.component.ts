import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    this.isLoading = true;
    this.authService.login(form).subscribe(
      (response) => {
        console.log(form, response);
        this.isLoading = false;
        // Store token in localStorage
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/admin/manage-brikkho']); // Redirect to admin page after successful login
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Invalid email or password';
      }
    );
  }

}
