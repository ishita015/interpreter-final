import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  data;
  constructor() { 
    this.data = JSON.parse(localStorage.getItem('userViewData'));
    console.log("vvvvvvvvvvvvvvv",this.data);
  }

  ngOnInit(): void {
  }

}
