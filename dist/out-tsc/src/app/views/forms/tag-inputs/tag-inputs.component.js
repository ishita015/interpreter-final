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
import { FormControl } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
var TagInputsComponent = /** @class */ (function () {
    function TagInputsComponent(dl) {
        this.dl = dl;
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new FormControl(this.items);
        this.tagsCtrl2 = new FormControl([{ display: 'Bangladesh', value: 'BD' }]);
    }
    TagInputsComponent.prototype.ngOnInit = function () {
        this.autocompletes$ = this.dl.getCountries();
    };
    TagInputsComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is ' + item);
    };
    TagInputsComponent = __decorate([
        Component({
            selector: 'app-tag-inputs',
            templateUrl: './tag-inputs.component.html',
            styleUrls: ['./tag-inputs.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService])
    ], TagInputsComponent);
    return TagInputsComponent;
}());
export { TagInputsComponent };
//# sourceMappingURL=tag-inputs.component.js.map