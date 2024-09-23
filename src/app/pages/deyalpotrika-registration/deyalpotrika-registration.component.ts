import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-deyalpotrika-registration',
  templateUrl: './deyalpotrika-registration.component.html',
  styleUrls: ['./deyalpotrika-registration.component.css']
})
export class DeyalpotrikaRegistrationComponent implements OnInit {
  isLoading = false;
  isSuccess = false;
  errorMessage = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(detalRegistrationForm: any) {
    this.isLoading = true; // Show loading state
    this.errorMessage = ''; // Reset error message
    // console.log(detalRegistrationForm);

    // Call the API to post data
    this.dataService.postDeyalReg(detalRegistrationForm).subscribe({
      next: (res) => {
        this.isLoading = false; // Hide loading state
        if (res.success) {
          this.isSuccess = true; // Show success message
          // console.log(res);
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      },
      error: (error) => {
        this.isLoading = false; // Hide loading state
        this.errorMessage = 'An unexpected error occurred. Please try again.'; // Show error message
        // console.error('Registration failed:', error);
      }
    });
  }
}
