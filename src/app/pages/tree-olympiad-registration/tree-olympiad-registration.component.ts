import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree-olympiad-registration',
  templateUrl: './tree-olympiad-registration.component.html',
  styleUrls: ['./tree-olympiad-registration.component.css']
})
export class TreeOlympiadRegistrationComponent implements OnInit {

  isLoading = false; // For showing loading state on the button
  isSuccess = false; // For showing the success message
  errorMessage = ''; // For showing error message

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  onSubmit(registrationFormData: any) {
    this.isLoading = true; // Start loading state
    this.errorMessage = ''; // Clear any previous errors
  
    // Call the API to submit the registration data
    this.dataService.postDeyalReg(registrationFormData).subscribe({
      next: (res) => {
        this.isLoading = false; // Stop loading state
        
        // Check if the response indicates success
        if (res && res.success) {
          this.isSuccess = true; // Show success message
          // console.log('Registration successful:', res);
        } else {
          // Handle case where the response does not indicate success
          this.errorMessage = 'Registration failed. Please try again.';
          // console.warn('Unexpected response:', res);
        }
      },
      error: (error) => {
        this.isLoading = false; // Stop loading state
        this.errorMessage = 'An unexpected error occurred. Please try again.'; // Set error message
        // console.error('API error during registration:', error);
      }
    });
  }
}
