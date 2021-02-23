var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsmindComponent } from './iconsmind/iconsmind.component';
const routes = [
    {
        path: 'iconsmind',
        component: IconsmindComponent
    }
];
let IconsRoutingModule = /** @class */ (() => {
    let IconsRoutingModule = class IconsRoutingModule {
    };
    IconsRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
})();
export { IconsRoutingModule };
//# sourceMappingURL=icons-routing.module.js.map