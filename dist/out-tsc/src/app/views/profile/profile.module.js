var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
let ProfileModule = /** @class */ (() => {
    let ProfileModule = class ProfileModule {
    };
    ProfileModule = __decorate([
        NgModule({
            declarations: [AdminProfileComponent, ChangePasswordComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NgxMaskModule.forRoot(),
                ProfileRoutingModule
            ]
        })
    ], ProfileModule);
    return ProfileModule;
})();
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map