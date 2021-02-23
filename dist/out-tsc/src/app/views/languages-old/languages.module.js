var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesAddComponent } from './languages-add/languages-add.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesEditComponent } from './languages-edit/languages-edit.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { LanguagesAddEditComponent } from './languages-add-edit/languages-add-edit.component';
import { LangimportComponent } from './langimport/langimport.component';
let LanguagesModule = /** @class */ (() => {
    let LanguagesModule = class LanguagesModule {
    };
    LanguagesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                NgxDatatableModule,
                ReactiveFormsModule,
                SharedComponentsModule,
                NgbModule,
                LanguagesRoutingModule
            ],
            declarations: [
                LanguagesAddComponent,
                LanguagesListComponent,
                LanguagesEditComponent, LanguagesViewComponent, LanguagesAddEditComponent, LangimportComponent
            ]
        })
    ], LanguagesModule);
    return LanguagesModule;
})();
export { LanguagesModule };
//# sourceMappingURL=languages.module.js.map