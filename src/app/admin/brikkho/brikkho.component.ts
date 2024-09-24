import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

interface DataItem {
  id: string; // Assuming there's an ID in your data model
  name: string;
  schoolName: string;
  district: string;
  volunteerCode: string;
  volunteerName: string | null;
  email: string;
  whatsApp: string | null;
  category: string;
  isPaymentDone: boolean;
  transactionId: string | null;
}

@Component({
  selector: 'app-brikkho',
  templateUrl: './brikkho.component.html',
  styleUrls: ['./brikkho.component.css']
})
export class BrikkhoComponent implements OnInit {
  paginatedData: DataItem[] = [];
  PageNumber: number = 0;
  pageSize: number = 20;
  totalRecords: number = 0;
  notificationMessage: string | null = null; // Initialize notification message
  selectedBrikkho: any = []; // Ensure this property is correctly defined

  constructor(private api: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchData(this.PageNumber, this.pageSize);
  }

  fetchData(pageNumber: number, pageSize: number) {
    this.api.getBrikkho(pageNumber, pageSize).subscribe(response => {
      if (response.success) {
        this.paginatedData = response.data; // Assign fetched data
        this.totalRecords = response.count; // Assuming your API sends total record count
        this.notificationMessage = null; // Clear notification message on successful response
      } else {
        this.notificationMessage = "No data found"; // Set notification message
        this.paginatedData = []; // Clear paginated data if no records found
      }
    });
  }

  openEditModal(item: any) {
    this.selectedBrikkho.id = item.id;
    this.selectedBrikkho.name = item.name;
    this.selectedBrikkho.schoolName = item.schoolName;
    this.selectedBrikkho.district = item.district;
    this.selectedBrikkho.volunteerCode = item.volunteerCode;
    this.selectedBrikkho.volunteerName = item.volunteerName;
    this.selectedBrikkho.email = item.email;
    this.selectedBrikkho.whatsApp = item.whatsApp;
    this.selectedBrikkho.category = item.category;
    this.selectedBrikkho.isPaymentDone = item.isPaymentDone;
    this.selectedBrikkho.transactionId = item.transactionId;
  }

  updateBrikkho(): void {
    let model = {
      name: this.selectedBrikkho.name, schoolName: this.selectedBrikkho.schoolName, district: this.selectedBrikkho.district, volunteerCode: this.selectedBrikkho.volunteerCode, volunteerName: this.selectedBrikkho.volunteerName, email: this.selectedBrikkho.email, whatsApp: this.selectedBrikkho.whatsApp, category: this.selectedBrikkho.category, isPaymentDone: this.selectedBrikkho.isPaymentDone, transactionId: this.selectedBrikkho.transactionId
    }

    this.api.updateBrikkho(this.selectedBrikkho.id, model).subscribe(
      response => {
        console.log(this.selectedBrikkho.id, model);
        if (response.success) {
          // this.notificationMessage = "Brikkho updated successfully!";
          this.toastr.success(response.message);
          this.fetchData(this.PageNumber, this.pageSize);
          // this.selectedBrikkho = null; // Reset after update
        } else {
          // this.notificationMessage = "Update failed!";
          this.toastr.warning(response.message);
        }
      },
      error => {
        this.toastr.error("Server error.");
      }
    );
  }

  nextPage() {
    // Allow the next page to be fetched if there are more records to show
    if ((this.PageNumber + 1) * this.pageSize < this.totalRecords || this.totalRecords % this.pageSize !== 0) {
        this.PageNumber++;
        this.fetchData(this.PageNumber, this.pageSize);
    }
  }

  previousPage() {
    if (this.PageNumber > 0) {
      this.PageNumber--;
      this.fetchData(this.PageNumber, this.pageSize);
    }
  }

  refreshData() {
    this.PageNumber = 0; // Reset to the first page
    this.fetchData(this.PageNumber, this.pageSize); // Fetch data again
  }

}
