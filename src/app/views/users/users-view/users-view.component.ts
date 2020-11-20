import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {
  data
  constructor() {
    this.data = JSON.parse(localStorage.getItem('userViewData'));
    console.log("vvvvvvvvvvvvvvv",this.data);
    
   }

  ngOnInit() {
  }

}
