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
import { HttpService } from "../../../shared/services/http.service";
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
let LanguagesEditComponent = /** @class */ (() => {
    let LanguagesEditComponent = class LanguagesEditComponent {
        constructor(validation, service, fb, toastr, router, route) {
            this.validation = validation;
            this.service = service;
            this.fb = fb;
            this.toastr = toastr;
            this.router = router;
            this.route = route;
            this.state = false;
            this.Check = 'Add';
            this.LobData = [];
            this.LanguageData = [];
            this.d_id = 0;
            this.s_id = 0;
        }
        ngOnInit() {
            this.createForm();
            this.LOB();
            this.Language();
            this.route.paramMap.subscribe(params => {
                console.log("country");
                if (params.get('id') == null) {
                    this.Check = 'Add';
                    // this.state = false;
                }
                else {
                    this.Check = 'Edit';
                    this.state = false;
                    this.service.get('GetLanguageAssignmentSettingsDetail/' + params.get('id')).subscribe(res => {
                        this.langaugeEditForm.patchValue(res['data'][0]);
                    });
                }
            });
        }
        LOB() {
            this.service.get('get-lob-active').subscribe(res => {
                this.LobData = res['data'];
            });
        }
        Language() {
            this.service.get('get-language-active').subscribe(res => {
                this.LanguageData = res['data'];
            });
        }
        rateCal(e, type) {
            if (type == 'd') {
                this.d_id = e;
            }
            else {
                this.s_id = e;
            }
            if (this.d_id != 0 && this.s_id != 0) {
                this.service.post('calculate-rate-language-settings', { destination_language: this.d_id, source_language: this.s_id }).subscribe(res => {
                    this.langaugeEditForm.patchValue({ rate: res['data']['total'] });
                });
            }
        }
        /*========== Form Value Start Here========*/
        createForm() {
            this.langaugeEditForm = this.fb.group({
                lob_id: ['', this.validation.onlyRequired_validator],
                source_language: ['', this.validation.onlyRequired_validator],
                // source_language: [''],
                destination_language: ['', this.validation.onlyRequired_validator],
                rate: ['', this.validation.onlyRequired_validator],
                id: ['']
            });
        }
        submitEdit() {
            this.submitted = true;
            if (this.langaugeEditForm.invalid) {
                return;
            }
            this.submitted = false;
            this.service.post('addEditLanguageSetting', this.langaugeEditForm.value)
                .subscribe(res => {
                this.toastr.success(res['msg'], '', { timeOut: 1000, positionClass: 'toast-top-center' });
                this.router.navigate(['/language-assignment-settings/list']);
            });
        }
        changeState() {
            this.state = true;
        }
    };
    LanguagesEditComponent = __decorate([
        Component({
            selector: 'app-languages-edit',
            templateUrl: './languages-edit.component.html',
            styleUrls: ['./languages-edit.component.scss']
        }),
        __metadata("design:paramtypes", [ValidationsService,
            HttpService, FormBuilder,
            ToastrService, Router,
            ActivatedRoute])
    ], LanguagesEditComponent);
    return LanguagesEditComponent;
})();
export { LanguagesEditComponent };
//# sourceMappingURL=languages-edit.component.js.map