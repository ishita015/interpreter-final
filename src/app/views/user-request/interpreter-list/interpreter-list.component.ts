import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { MouseEvent } from '@agm/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { debounceTime } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
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
  requestBtn = false
  searchControl: FormControl = new FormControl();
  // initial center position for the map
  lat: number = 0;
  lng: number = 0;
  scroll: boolean = false;
  a

  clickedMarker(label: string,id ,info, index: number) {
    this.requestId = id;
    localStorage.setItem('Id', JSON.stringify(id));
    localStorage.setItem('Info', JSON.stringify(info));
    this.nameShow = label;
    this.addressShow = info.address;
    this.mobileShow =  info.mobile;
    this.emailShow = info.email;
    this.requestBtn = true;
    console.log(`clicked the marker: ${id || index}`);
    // this.markers[index].visible = false;
  }
  
  mapClicked($event: MouseEvent) {
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
  
  // markers: Array<any> = [
	//   {
	// 	  lat: 51.673858,
	// 	  lng: 7.815982,
	// 	  label: 'A',
	// 	  draggable: true,
  //     visible: false,
  //     opacity: 0.7
	//   },
	//   {
	// 	  lat: 51.373858,
	// 	  lng: 7.215982,
	// 	  label: 'B',
	// 	  draggable: false,
  //     visible: true,
  //     opacity: 0.6
	//   },
	//   {
	// 	  lat: 51.723858,
	// 	  lng: 7.895982,
	// 	  label: 'C',
	// 	  draggable: true,
  //     visible: true,
  //     opacity: 0.4
	//   }
  // ]
  
  ngOnInit() {
    this.assignMyNearbyInterpreter();
    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
  }

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public service:HttpService){
    this.serviceid = JSON.parse(localStorage.getItem('serviceId'));
    console.log("id", this.serviceid);
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      console.log("xxxxxxx",this.filteredUser);
      return this.filteredUser = [... this.userData];
    }

    const columns = Object.keys( this.userData[0]);
    if (!columns.length) {
      return;
    }

    const rows =  this.userData.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredUser = rows;
  }
  assignMyNearbyInterpreter(){
    console.log("iddd", this.serviceid);
    this.service.myNearbyInterpreter(this.serviceid).subscribe(res => {
      console.log(res['data']);
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
            opacity: 0.7
        })
        }
        console.log("markers-",this.markers);
       
    });
  }

  requestDetail(id,data){

    console.log("table row idddddd",id);
    this.requestId = id;
    this.requestId = JSON.parse(localStorage.getItem('Id'));
    console.log("table row id2", this.requestId );
    data = JSON.parse(localStorage.getItem('Info'));
    console.log("dataaaaaaaaaaaaaaaaaa",data);
    
    this.userId = JSON.parse(localStorage.getItem('serviceId'));
    console.log("userId", this.userId);
    this.service.sendInterpreterRequest(this.requestId,this.userId).subscribe(res => {
      console.log("ress",  res);
      this.requestStatus = res;
      if(this.requestStatus.status == 1){
        this.nameShow = data.name;
        this.nameShow = data.label;
        this.addressShow = data.address;
        this.mobileShow =  data.mobile;
        this.emailShow =  data.email;
        this.toastr.success(this.requestStatus.message,'', { timeOut: 2000 });
      }
      else{
        this.toastr.error(this.requestStatus.message,'', { timeOut: 2000 });
      }
    })
    
  }
  // requestView(){
  //   console.log("aaaaaaaid", this.id);
  //   this.a = JSON.parse(localStorage.getItem('rowData'));
  //     console.log("llllllll",this.a);
      
  // }
}
