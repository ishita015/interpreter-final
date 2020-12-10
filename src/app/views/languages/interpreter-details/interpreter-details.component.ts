import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-interpreter-details',
  templateUrl: './interpreter-details.component.html',
  styleUrls: ['./interpreter-details.component.scss']
})
export class InterpreterDetailsComponent implements OnInit {
  list_Obj: any[];
  languageData;
  filteredLanguage;
  lang_id;
  searchControl: FormControl = new FormControl();
  constructor(   private dl: DataLayerService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    public validation: ValidationsService,
    public service:HttpService,
    private router: Router,) { }

  ngOnInit(){
      this.lang_id = JSON.parse(localStorage.getItem('lang_id'));
      this.selectLangInterpreter();
      this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
          this.filerData(value);
      });
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      console.log("xxxxxxx",this.filteredLanguage);
      return this.filteredLanguage = [... this.languageData];
    }

    const columns = Object.keys( this.languageData[0]);
    if (!columns.length) {
      return;
    }

    const rows =  this.languageData.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredLanguage = rows;
  }


  // getLangSelectInterpreter(language_id)
  selectLangInterpreter(){
    this.service.getLangSelectInterpreter(this.lang_id)
    .subscribe(res => {
        // console.log("api response",res);
        this.list_Obj = res['data'];
        this.languageData = [...res['data']];
        // console.log("listttttttt", this.list_Obj);
        this.filteredLanguage = this.list_Obj;
    });
}












interpreter(){
  this.router.navigate(['/languages/interpreter-detail']);
}


}
