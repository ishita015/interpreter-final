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
import { DataLayerService } from '../../services/data-layer.service';
import { combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime, map } from 'rxjs/operators';
import { SharedAnimations } from '../../animations/shared-animations';
import { SearchService } from '../../services/search.service';
let SearchComponent = /** @class */ (() => {
    let SearchComponent = class SearchComponent {
        constructor(dl, searchService) {
            this.dl = dl;
            this.searchService = searchService;
            this.page = 1;
            this.pageSize = 6;
            this.searchCtrl = new FormControl('');
        }
        ngOnInit() {
            this.results$ = combineLatest(this.dl.getProducts(), this.searchCtrl.valueChanges
                .pipe(startWith(''), debounceTime(200)))
                .pipe(map(([products, searchTerm]) => {
                return products.filter(p => {
                    return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                });
            }));
        }
    };
    SearchComponent = __decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss'],
            animations: [SharedAnimations]
        }),
        __metadata("design:paramtypes", [DataLayerService,
            SearchService])
    ], SearchComponent);
    return SearchComponent;
})();
export { SearchComponent };
//# sourceMappingURL=search.component.js.map