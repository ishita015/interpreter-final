var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguagesAddComponent } from './languages-add/languages-add.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { LanguagesEditComponent } from './languages-edit/languages-edit.component';
import { LanguagesViewComponent } from './languages-view/languages-view.component';
import { LangimportComponent } from './langimport/langimport.component';
import { InterpreterDetailsComponent } from './interpreter-details/interpreter-details.component';
var routes = [
    { path: 'list', component: LanguagesListComponent },
    { path: 'add', component: LanguagesAddComponent },
    { path: 'edit/:id', component: LanguagesEditComponent },
    { path: 'view/:id', component: LanguagesViewComponent },
    { path: 'excelImport', component: LangimportComponent },
    { path: 'interpreter-detail', component: InterpreterDetailsComponent },
];
var LanguagesRoutingModule = /** @class */ (function () {
    function LanguagesRoutingModule() {
    }
    LanguagesRoutingModule = __decorate([
        NgModule({
            declarations: [],
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], LanguagesRoutingModule);
    return LanguagesRoutingModule;
}());
export { LanguagesRoutingModule };
//# sourceMappingURL=languages-routing.module.js.map