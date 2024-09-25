import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
interface DataItem {
  potrikaName: string;
  district: string;
  category: string;
  volunteerCode: string;
  volunteerName: string | null;
  leaderName: string;
  leaderNumber: string;
  whatsAppNumber: string | null;
  email: string;
  isPaymentDone: boolean;
  bkashNumber: string | null;
}

@Component({
  selector: 'app-deyal',
  templateUrl: './deyal.component.html',
  styleUrls: ['./deyal.component.css']
})
export class DeyalComponent implements OnInit {
  paginatedData: DataItem[] = [];
  PageNumber: number = 0;
  pageSize: number = 20; // Adjust as necessary
  totalRecords: number = 0;
  notificationMessage: string | null = null; // Initialize notification message
  selectedDeyal: any = []; // Ensure this property is correctly defined
  searchQuery: string = ''; // to hold the search query

  constructor(private api: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchData(this.PageNumber, this.pageSize);
  }

  fetchData(pageNumber: number, pageSize: number): void {
    this.api.getDeyal(pageNumber, pageSize).subscribe(
      (response: any) => {
        if (response.success) {
          this.paginatedData = response.data; // Assuming 'data' is the key with the records
          this.totalRecords = response.total; // Assuming 'total' is the key for total records
          this.notificationMessage = null;
        } else {
          this.notificationMessage = "No data found"; // Set notification message
          this.paginatedData = []; // Clear paginated data if no records found
        }
      },
      (error) => {
        console.error('Error fetching data', error);
        this.notificationMessage = 'Failed to load data.';
      }
    );
  }

  nextPage(): void {
    // Allow the next page to be fetched if there are more records to show
    if ((this.PageNumber + 1) * this.pageSize < this.totalRecords || this.totalRecords % this.pageSize !== 0) {
      this.PageNumber++;
      this.fetchData(this.PageNumber, this.pageSize);
    }
  }

  previousPage(): void {
    if (this.PageNumber > 0) {
      this.PageNumber--;
      this.fetchData(this.PageNumber, this.pageSize);
    }
  }

  refreshData(): void {
    this.fetchData(this.PageNumber, this.pageSize);
  }

  openEditModal(item: any): void {
    this.selectedDeyal.id = item.id;
    this.selectedDeyal.potrikaName = item.potrikaName;
    this.selectedDeyal.district = item.district;
    this.selectedDeyal.category = item.category;
    this.selectedDeyal.volunteerCode = item.volunteerCode;
    this.selectedDeyal.volunteerName = item.volunteerName; // Assuming this field is still needed
    this.selectedDeyal.leaderName = item.leaderName;
    this.selectedDeyal.leaderNumber = item.leaderNumber;
    this.selectedDeyal.email = item.email;
    this.selectedDeyal.whatsAppNumber = item.whatsAppNumber; // Correct case
    this.selectedDeyal.isPaymentDone = item.isPaymentDone; // If needed
    this.selectedDeyal.bkashNumber = item.bkashNumber; // If needed
  }  

  updateDeyal(): void {
    let model = {
      potrikaName: this.selectedDeyal.potrikaName,
      district: this.selectedDeyal.district,
      category: this.selectedDeyal.category,
      volunteerCode: this.selectedDeyal.volunteerCode,
      volunteerName: this.selectedDeyal.volunteerName,
      leaderName: this.selectedDeyal.leaderName,
      leaderNumber: this.selectedDeyal.leaderNumber,
      whatsAppNumber: this.selectedDeyal.whatsAppNumber,
      email: this.selectedDeyal.email,
      isPaymentDone: this.selectedDeyal.isPaymentDone,
      bkashNumber: this.selectedDeyal.bkashNumber
    };
  
    this.api.updateDeyal(this.selectedDeyal.id, model).subscribe(
      response => {
        console.log(this.selectedDeyal.id, model);
        if (response.success) {
          // this.notificationMessage = "Deyal updated successfully!";
          this.toastr.success(response.message);
          this.fetchData(this.PageNumber, this.pageSize);
          // this.selectedDeyal = null; // Reset after update
        } else {
          // this.notificationMessage = "Update failed!";
          this.toastr.warning(response.message);
        }
      },
      error => {
        // this.notificationMessage = "An error occurred while updating.";
        this.toastr.error("Server error.");
      }
    );
  }

  searchBrikkho(query: string): void {
    if (query.trim()) {
      this.api.deyalSearch(query).subscribe(
        response => {
          if (response.success) {
            this.paginatedData = response.data; // Update the table data with search results
            this.notificationMessage = null;
          } else {
            this.notificationMessage = "No results found for the search query.";
            this.paginatedData = []; // Clear the table data if no results found
          }
        },
        error => {
          this.notificationMessage = "An error occurred while searching.";
          this.toastr.error("Server error.");
        }
      );
    } else {
      this.notificationMessage = "Please enter a valid search query.";
    }
  }

}
