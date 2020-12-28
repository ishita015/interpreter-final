import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { ValidationsService } from 'src/app/services/validations.service';
// import { MouseEvent } from '@agm/core';


// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


@Component({
  selector: 'app-interpreter-tracking',
  templateUrl: './interpreter-tracking.component.html',
  styleUrls: ['./interpreter-tracking.component.css']
})


export class InterpreterTrackingComponent implements OnInit {
  trackingCode;
  location_Obj;
  msg;
  constructor( 
    private router: Router,
    public service:CommonService,
    public validation: ValidationsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }
    markers: Array<any> = [];
    lat: number = 22.719568;
    lng: number = 75.857727;
    zoom: number = 8;
  // trackingCode
  ngOnInit(){
    //get tracking code in url
    this.trackingCode = this.route.snapshot.params.trackingCode; 
    this.service.updatelocation(this.trackingCode);
    this.getInterpreterLocation();
  }


  // markers: marker[] = [
  //   {
  //     lat: 51.673858,
  //     lng: 7.815982,
  //     label: 'A',
  //     draggable: true
  //   },
  // ]


  // first_name: "gokul"
  // interpreter_id: 24
  // last_name: "rathod"
  // latitude: 22.7025137
  // longitude: 76.1305457
  // unique_code: "I8WVximpygwesWvQfzT1DtspNzFxdF"


  getInterpreterLocation() {
    this.service.interpreterTracking(this.trackingCode).subscribe(res => {
        console.log("api response",res);
        this.msg = res;
        if(this.msg.status==1){
          this.location_Obj = res['data'][0];
          console.log("full response",this.location_Obj);
          var fullname=this.location_Obj.first_name+" "+this.location_Obj.last_name;

          this.markers = [
            {
              lat:this.location_Obj.latitude,
              lng:this.location_Obj.longitude,
              label: fullname,
              // id:this.location_Obj,
              // mobile:this.location_Obj.cell_phone,
              // address:this.assignInfo.lang_name,
              // email:this.assignInfo.email,
              draggable: true,
              visible: false,
              opacity: 0.7
            }
          ]

          console.log("markers",this.markers)
        }else{

          this.toastr.error(this.location_Obj.message, '', { timeOut: 1000 });
        }
        // console.log("my testing", this.language_Obj);
    });
  }


  // interpreterTracking

   // google maps zoom level
   
   
  
   // initial center position for the map
 
   clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
   }
   
  //  mapClicked($event: MouseEvent) {
  //    this.markers.push({
  //      lat: $event.coords.lat,
  //      lng: $event.coords.lng,
  //      draggable: true
  //    });
  //  }
   
  //  markerDragEnd(m: marker, $event: MouseEvent) {
  //    console.log('dragEnd', m, $event);
  //  }
   
   


 }
 
