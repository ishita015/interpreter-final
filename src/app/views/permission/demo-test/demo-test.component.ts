import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {
  dataRe;
  constructor() { }

  ngOnInit() {
    this.dataRe = JSON.parse(localStorage.getItem('permissionInfo'));
  	console.log("yes is working",this.dataRe[0]);
  }

}
