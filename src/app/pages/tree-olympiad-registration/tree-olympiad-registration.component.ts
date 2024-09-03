import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-olympiad-registration',
  templateUrl: './tree-olympiad-registration.component.html',
  styleUrls: ['./tree-olympiad-registration.component.css']
})
export class TreeOlympiadRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Form Submitted Successfully!');
  }

}
