var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { ExcelServicesService } from '../../../shared/services/excel-services.service';
var LangimportComponent = /** @class */ (function () {
    // serviceEditForm: FormGroup;
    // public data;
    // formData;
    // id;
    // service_edit_Obj;
    // service_edit_Msg;
    // imageSrc;
    // submitted: boolean;
    function LangimportComponent(formBuilder, httpClient, router, excelService, service, toastr) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.router = router;
        this.excelService = excelService;
        this.service = service;
        this.toastr = toastr;
        // uploadForm: FormGroup; 
        //formData;
        this.selectedFile = null;
        this.fileToUpload = null;
        this.data = [
            {
                name: 'English',
                code: 'en',
                country: 'usa',
                base_rate: '20',
            }
        ];
        this.excel = [];
        this.form = this.formBuilder.group({
            image: ['']
        });
    }
    LangimportComponent.prototype.ngOnInit = function () { };
    LangimportComponent.prototype.uploadFile = function (event) {
        this.selectedFile = event.target.files[0];
    };
    LangimportComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.form.value);
        if (this.selectedFile == null) {
            this.toastr.warning('Please select xlsx file');
        }
        else {
            var formData = new FormData();
            this.form.value.image = this.selectedFile;
            console.log("aaaaaaaa", this.selectedFile);
            formData.append("image", this.selectedFile);
            this.service.importLanguage(formData).subscribe(function (res) {
                console.log("api response", res);
                // this.language_Obj = res
                // this.language_Msg = res
                // this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                _this.router.navigate(['/languages/list']);
            });
            //this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
            //(response) => console.log(response),
            // (error) => console.log(error)
            //)
        }
    };
    LangimportComponent.prototype.exportAsXLSX = function () {
        // this.service.getJSON().subscribe(data => {
        //   console.log("mmmmmmmmmmmmmmmmmmmm",data);
        var _this = this;
        this.data.forEach(function (row) {
            _this.excel.push(row);
        });
        //  });
        this.excelService.exportAsExcelFile(this.excel, 'sample');
    };
    LangimportComponent = __decorate([
        Component({
            selector: 'app-langimport',
            templateUrl: './langimport.component.html',
            styleUrls: ['./langimport.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            HttpClient,
            Router,
            ExcelServicesService,
            HttpService,
            ToastrService])
    ], LangimportComponent);
    return LangimportComponent;
}());
export { LangimportComponent };
//# sourceMappingURL=langimport.component.js.map