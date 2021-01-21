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
import { CropperSettings } from 'ngx-img-cropper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var AppImgCropperComponent = /** @class */ (function () {
    function AppImgCropperComponent(modalService) {
        this.modalService = modalService;
        this.cropperSettings = new CropperSettings();
        // this.cropperSettings.width = 100;
        // this.cropperSettings.height = 100;
        // this.cropperSettings.croppedWidth = 100;
        // this.cropperSettings.croppedHeight = 100;
        // this.cropperSettings.canvasWidth = 400;
        // this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.cropperDrawSettings.lineDash = true;
        this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth = 0;
        this.data = {};
    }
    AppImgCropperComponent.prototype.ngOnInit = function () {
    };
    AppImgCropperComponent.prototype.open = function (modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    AppImgCropperComponent = __decorate([
        Component({
            selector: 'app-img-cropper',
            templateUrl: './img-cropper.component.html',
            styleUrls: ['./img-cropper.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal])
    ], AppImgCropperComponent);
    return AppImgCropperComponent;
}());
export { AppImgCropperComponent };
//# sourceMappingURL=img-cropper.component.js.map