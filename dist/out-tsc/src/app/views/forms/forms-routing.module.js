var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';
import { AppImgCropperComponent } from './img-cropper/img-cropper.component';
import { WizardComponent } from './wizard/wizard.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
var routes = [
    {
        path: 'basic',
        component: BasicFormComponent
    },
    {
        path: 'layouts',
        component: FormLayoutsComponent
    },
    {
        path: 'input-group',
        component: InputGroupsComponent
    },
    {
        path: 'input-mask',
        component: InputMaskComponent
    },
    {
        path: 'tag-input',
        component: TagInputsComponent
    },
    {
        path: 'wizard',
        component: WizardComponent
    },
    {
        path: 'img-cropper',
        component: AppImgCropperComponent
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
export { FormsRoutingModule };
//# sourceMappingURL=forms-routing.module.js.map