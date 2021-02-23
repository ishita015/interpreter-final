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
import { HttpService } from 'src/app/shared/services/http.service';
let LangimportComponent = /** @class */ (() => {
    let LangimportComponent = class LangimportComponent {
        // serviceEditForm: FormGroup;
        // public data;
        // formData;
        // id;
        // service_edit_Obj;
        // service_edit_Msg;
        // imageSrc;
        // submitted: boolean;
        constructor(formBuilder, httpClient, router, service) {
            this.formBuilder = formBuilder;
            this.httpClient = httpClient;
            this.router = router;
            this.service = service;
        }
        ngOnInit() {
            this.uploadForm = this.formBuilder.group({
                file: ['']
            });
        }
        onFileSelect(event) {
            if (event.target.files.length > 0) {
                const file = event.target.files[0];
                this.uploadForm.get('file').setValue(file);
            }
        }
        onSubmit() {
            // this.formData = new FormData();
            // this.formData.append('file', this.uploadForm.get('file').value);
            // console.log(this.formData);
            this.service.importLanguage().subscribe(res => {
                console.log("api response", res);
                // this.language_Obj = res
                // this.language_Msg = res
                // this.toastr.success(this.language_Msg.message,'', { timeOut: 1000 });
                // this.router.navigate(['/login'])
                this.router.navigate(['/languages/list']);
            });
        }
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
            HttpService])
    ], LangimportComponent);
    return LangimportComponent;
})();
export { LangimportComponent };
//# sourceMappingURL=langimport.component.js.map