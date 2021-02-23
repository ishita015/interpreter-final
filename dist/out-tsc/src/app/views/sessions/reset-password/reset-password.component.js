var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Component } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from "../../../shared/services/http.service";
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MustMatch } from '../../../shared/services/must-match.validator';
let ResetPasswordComponent = /** @class */ (() => {
    let ResetPasswordComponent = class ResetPasswordComponent {
        constructor(formBuilder, apiservice, toastr, router, spinner, activatedRoute) {
            this.formBuilder = formBuilder;
            this.apiservice = apiservice;
            this.toastr = toastr;
            this.router = router;
            this.spinner = spinner;
            this.activatedRoute = activatedRoute;
            this.submitted = false;
        }
        ngOnInit() {
            localStorage.clear();
            this.Form = this.formBuilder.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
                reset_password_key: ['']
            }, {
                validator: MustMatch('password', 'confirmPassword')
            });
            this.activatedRoute.params.subscribe(params => {
                this.Form.patchValue({ reset_password_key: params['id'] });
            });
        }
        // convenience getter for easy access to form fields
        get f() { return this.Form.controls; }
        onSubmit() {
            return __awaiter(this, void 0, void 0, function* () {
                this.submitted = true;
                if (this.Form.invalid) {
                    return;
                }
                this.spinner.show();
                try {
                    var result = yield this.apiservice.post('reset-password', this.Form.value).toPromise();
                    this.spinner.hide();
                    if (result['status'] == true) {
                        this.toastr.success(result['msg']);
                        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
                            this.router.navigate(['sessions/signin']);
                        });
                    }
                    else {
                        this.toastr.warning(result['msg']);
                    }
                }
                catch (err) {
                    this.spinner.hide();
                    this.toastr.warning('Something went wrong from server/api');
                }
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            HttpService,
            ToastrService,
            Router,
            NgxSpinnerService,
            ActivatedRoute])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
})();
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map