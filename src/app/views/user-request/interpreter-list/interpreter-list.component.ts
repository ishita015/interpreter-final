import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { MouseEvent } from '@agm/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { debounceTime } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
  visible: boolean;
  opacity: number;
}
@Component({
  selector: 'app-interpreter-list',
  templateUrl: './interpreter-list.component.html',
  styleUrls: ['./interpreter-list.component.scss']
})
export class InterpreterListComponent implements OnInit {
  // google maps zoom level
  zoom: number = 8;
  list_Obj;
  serviceid;
  location;
  makerId;
  markers: Array<any> = [];
  filteredUser;
  userData;
  nameShow;
  mobileShow;
  emailShow;
  addressShow;
  requestId;
  userId;
  requestStatus;
  language_id;
  assignInfo;
  searchNameEmail = '';
  distance = '';
  rate = '';
  rating = '';
  distance_formdata;
  rates_formdata;
  ratings_formdata;
  namemail_formdata;
  api_res;
  mapInfo;
  searchControl: FormControl = new FormControl();
  distances: FormControl = new FormControl();
  rates: FormControl = new FormControl();
  ratings: FormControl = new FormControl();
  search_name_email: FormControl = new FormControl();
  // initial center position for the map
  // lat: number = 0;
  // lng: number = 0;
  scroll: boolean = false;
  


  lat: number = 22.7261762;
  lng: number = 76.1305457;


  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private router: Router,
    public service:HttpService){
    this.serviceid = JSON.parse(localStorage.getItem('serviceId'));
  }



  ngOnInit() {
    this.assignInfo = JSON.parse(localStorage.getItem('assignData'));
    this.service.currentMessage.subscribe(message => {
    this.mapInfo = message
    console.log("mapView", this.mapInfo);
     
   })
    this.lat = this.assignInfo.latitude;
    this.lng = this.assignInfo.longitude;
  

    console.log("my testing lat long  --",this.assignInfo)
    this.language_id = this.assignInfo.language;

    this.assignMyNearbyInterpreter();
    // this.searchControl.valueChanges
    // .pipe(debounceTime(200))
    // .subscribe(value => {
    //   this.filerData(value);
    // });
  }




  clickedMarker(label: string,id ,info, index: number,modal) {
    this.requestId = id;
    localStorage.setItem('Id', JSON.stringify(id));
    localStorage.setItem('Info', JSON.stringify(info));
    this.service.changeMessage(info);
    this.nameShow = label;
    this.addressShow = info.address;
    this.mobileShow =  info.mobile;
    this.emailShow = info.email;
    // this.language_id = info.language;
    this.userId = JSON.parse(localStorage.getItem('serviceId'));
    if(index != 0){
     this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
    this.service.sendInterpreterRequest(this.requestId,this.userId).subscribe(res => {
      this.requestStatus = res;
      if(this.requestStatus.status == 1){
        this.toastr.success(this.requestStatus.message,'', { timeOut: 2000 });
        this.router.navigate(['/user-request/list'])
      }
      else{
        this.toastr.error(this.requestStatus.message,'', { timeOut: 2000 });
      }
    })
  }, (reason) => {
  });
}
    // console.log("userId, service_id",  this.userId );
    // console.log(`clicked the marker: ${id || index}`);
    // this.markers[index].visible = false;
  }
  
  mapClicked($event: MouseEvent) {
    console.log("eeeee",$event);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      visible: true,
      opacity: 0.4
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  


  /*filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.filteredUser = [... this.userData];
    }

    const columns = Object.keys( this.userData[0]);
    if (!columns.length) {
      return;
    }

    const rows =  this.userData.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredUser = rows;
  }
*/
  assignMyNearbyInterpreter(){
     this.distance_formdata = this.distances.value ;
     this.rates_formdata = this.rates.value;
     this.ratings_formdata = this.ratings.value
     this.namemail_formdata = this.search_name_email.value
     this.distance = this.distance_formdata;
     this.searchNameEmail =  this.namemail_formdata ;
     this.rate = this.rates_formdata;
     this.rating = this.ratings_formdata;
     
    //  console.log("value set", this.distance);
    this.service.myNearbyInterpreter(this.serviceid,this.language_id,this.searchNameEmail,this.distance,this.rate,this.rating).subscribe(res => {
        if(res['status'] == 0){
       
          this.list_Obj = '';
          this.userData = '';
          this.filteredUser = '';

          this.markers = [
            {
              lat:this.assignInfo.latitude,
              lng:this.assignInfo.longitude,
              label: this.assignInfo.caseworker_name,
              id:this.assignInfo.id,
              mobile:this.assignInfo.cell_phone,
              address:this.assignInfo.lang_name,
              email:this.assignInfo.email,
              draggable: false,
              visible: false,
              opacity: 0.7
            }
          ]

          // console.log(this.markers)
          // console.log(this.markers[0])
          // this.markers=[];
          // this.markers.filter(item => item !== this.markers[0]);
        }else{
          
          this.markers = [
            {
              lat:this.assignInfo.latitude,
              lng:this.assignInfo.longitude,
              label: this.assignInfo.caseworker_name,
              id:this.assignInfo.id,
              mobile:this.assignInfo.cell_phone,
              address:this.assignInfo.lang_name,
              email:this.assignInfo.email,
              draggable: false,
              visible: false,
              opacity: 0.7
            }
          ]


          this.list_Obj = res['data'];
          this.userData = [...res['data']];
          this.filteredUser = this.list_Obj;
          for(let i=0; i < this.list_Obj.length; i++){ 
            this.markers.push({
              lat:this.list_Obj[i].latitude,
              lng:this.list_Obj[i].longitude,
              label: this.list_Obj[i].name,
              id:this.list_Obj[i].id,
              mobile:this.list_Obj[i].mobile,
              address:this.list_Obj[i].address,
              email:this.list_Obj[i].email,
              draggable: false,
              visible: false,
              opacity: 0.7,
              icon:"./assets/images/faces/placeholder.png"
           })
          } 
          console.log("clicked the marker:", this.markers);
        }
      });
  }
//}

  viewDetail(){
    this.router.navigate(['/user-request/request-view',this.assignInfo.id])
  }

  requestDetail(id,data,modal){
    this.requestId = id;
    this.userId = JSON.parse(localStorage.getItem('serviceId'));
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
    .result.then((result) => {
    this.service.sendInterpreterRequest(this.requestId,this.userId).subscribe(res => {
      this.requestStatus = res; 
      if(this.requestStatus.status == 1){
        this.nameShow = data.name;
        this.addressShow = data.address;
        this.mobileShow =  data.mobile;
        this.emailShow =  data.email;
        this.toastr.success(this.requestStatus.message,'', { timeOut: 2000 });
        this.router.navigate(['/user-request/list'])
      }
      else{
        this.router.navigate(['/user-request/list'])
        this.toastr.error(this.requestStatus.message,'', { timeOut: 2000 });
      }
    })
  }, (reason) => {
  });
  }




  

  assignAllInterpreter(){
    console.log("j",this.list_Obj)
    this.service.requestAssignAllInterpreter(this.serviceid,this.list_Obj).subscribe(res => {
      console.log("res",res)
      this.requestStatus = res;
      if(res['status']=='1'){
        this.router.navigate(['/user-request/list'])
        this.toastr.success(this.requestStatus.message,'', { timeOut: 2000 });
      }else{
        this.router.navigate(['/user-request/list'])
        this.toastr.error(this.requestStatus.message,'', { timeOut: 2000 });
      }
      
    });
    
  }

  // viewDetail(){
  //   this.router.navigate(['/user-request/request-view',this.assignInfo.id])
  // }

}
