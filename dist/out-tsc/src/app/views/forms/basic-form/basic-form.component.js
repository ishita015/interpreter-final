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
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
let BasicFormComponent = /** @class */ (() => {
    let BasicFormComponent = class BasicFormComponent {
        constructor(fb, toastr) {
            this.fb = fb;
            this.toastr = toastr;
        }
        ngOnInit() {
            this.buildFormBasic();
            this.radioGroup = this.fb.group({
                radio: []
            });
        }
        buildFormBasic() {
            this.formBasic = this.fb.group({
                experience: []
            });
        }
        submit() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
            }, 3000);
        }
    };
    BasicFormComponent = __decorate([
        Component({
            selector: 'app-basic-form',
            templateUrl: './basic-form.component.html',
            styleUrls: ['./basic-form.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder,
            ToastrService])
    ], BasicFormComponent);
    return BasicFormComponent;
})();
export { BasicFormComponent };
//# sourceMappingURL=basic-form.component.js.map