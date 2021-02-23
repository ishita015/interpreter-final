var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener } from '@angular/core';
let FullScreenWindowDirective = /** @class */ (() => {
    let FullScreenWindowDirective = class FullScreenWindowDirective {
        // Full screen
        cancelFullScreen(el) {
            var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
            if (requestMethod) { // cancel full screen.
                requestMethod.call(el);
            }
            // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            //     var wscript = new ActiveXObject("WScript.Shell");
            //     if (wscript !== null) {
            //         wscript.SendKeys("{F11}");
            //     }
            // }
        }
        requestFullScreen(el) {
            // Supports most browsers and their versions.
            var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
            if (requestMethod) { // Native full screen.
                requestMethod.call(el);
            }
            // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            //     var wscript = new ActiveXObject("WScript.Shell");
            //     if (wscript !== null) {
            //         wscript.SendKeys("{F11}");
            //     }
            // }
            return false;
        }
        toggleFullscreen() {
            var elem = document.body;
            var isInFullScreen = (document['fullScreenElement'] && document['fullScreenElement'] !== null) || (document['mozFullScreen'] || document['webkitIsFullScreen']);
            if (isInFullScreen) {
                this.cancelFullScreen(document);
            }
            else {
                this.requestFullScreen(elem);
            }
            return false;
        }
    };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenWindowDirective.prototype, "toggleFullscreen", null);
    FullScreenWindowDirective = __decorate([
        Directive({
            selector: '[fullScreenWindow]'
        })
    ], FullScreenWindowDirective);
    return FullScreenWindowDirective;
})();
export { FullScreenWindowDirective };
//# sourceMappingURL=full-screen.directive.js.map