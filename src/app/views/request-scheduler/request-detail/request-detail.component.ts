import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../shared/services/http.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  data;
  id;
  event_at = [];
  len;
  constructor(public service: HttpService, private router: Router, private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getRequestDetails();
  }

  GetAllPagesPermission() {
    this.service.get('getClientRoleMenusForPages/' + JSON.parse(localStorage.getItem('roleId'))).subscribe(res => {
      var count = 0;
      for (var i = 0; i < res['data'].length; ++i) {
        if (res['data'][i].module_id == 7) {
          if (res['data'][i].view_permission == 'false') {
            this.router.navigate(['/client-request/all-request-list']);
          } else {
            count = count + 1;
            alert(count)
          }
        }
        else {
          let obj = res['data'].find(o => o.module_id === 7);
          alert(JSON.stringify(obj))
          if (count == 0) {

            this.router.navigate(['/client-request/all-request-list']);
          }

        }
      }
    })
  }



  getRequestDetails() {
    this.service.get("getRequestDetails/" + this.id).subscribe((res) => {
      this.data = res['data'][0];
      if (this.data.recurrent_assignment == "1") {
        if (this.data.repeats == "1" || this.data.repeats == "2") {
          this.event_at = this.data.event_at.split(",");
          this.len = this.event_at.length
        }
      }
    })
  }
}
