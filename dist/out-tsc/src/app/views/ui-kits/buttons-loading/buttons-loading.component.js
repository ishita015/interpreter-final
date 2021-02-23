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
let ButtonsLoadingComponent = /** @class */ (() => {
    let ButtonsLoadingComponent = class ButtonsLoadingComponent {
        constructor() {
            this.loadingButtons = [
                {
                    name: 'primary',
                    loading: false,
                },
                {
                    name: 'secondary',
                    loading: false,
                },
                {
                    name: 'success',
                    loading: false,
                },
                {
                    name: 'warning',
                    loading: false,
                },
                {
                    name: 'info',
                    loading: false,
                },
                {
                    name: 'danger',
                    loading: false,
                },
                {
                    name: 'light',
                    loading: false,
                },
                {
                    name: 'dark',
                    loading: false,
                }
            ];
            this.laddaButtons = [
                {
                    name: 'primary',
                    loading: false,
                },
                {
                    name: 'secondary',
                    loading: false,
                },
                {
                    name: 'success',
                    loading: false,
                },
                {
                    name: 'warning',
                    loading: false,
                },
                {
                    name: 'info',
                    loading: false,
                },
                {
                    name: 'danger',
                    loading: false,
                },
                {
                    name: 'light',
                    loading: false,
                },
                {
                    name: 'dark',
                    loading: false,
                }
            ];
        }
        ngOnInit() { }
        showLoading(btn) {
            btn.loading = true;
            setTimeout(() => {
                btn.loading = false;
            }, 3000);
        }
    };
    ButtonsLoadingComponent = __decorate([
        Component({
            selector: 'app-buttons-loading',
            templateUrl: './buttons-loading.component.html',
            styleUrls: ['./buttons-loading.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsLoadingComponent);
    return ButtonsLoadingComponent;
})();
export { ButtonsLoadingComponent };
//# sourceMappingURL=buttons-loading.component.js.map