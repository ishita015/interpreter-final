var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { Component } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
var InterpreterDetailsComponent = /** @class */ (function () {
    function InterpreterDetailsComponent(dl, modalService, toastr, validation, service, router) {
        this.dl = dl;
        this.modalService = modalService;
        this.toastr = toastr;
        this.validation = validation;
        this.service = service;
        this.router = router;
        this.searchControl = new FormControl();
    }
    InterpreterDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang_id = JSON.parse(localStorage.getItem('lang_id'));
        this.selectLangInterpreter();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
    };
    InterpreterDetailsComponent.prototype.filerData = function (val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            console.log("xxxxxxx", this.filteredLanguage);
            return this.filteredLanguage = __spread(this.languageData);
        }
        var columns = Object.keys(this.languageData[0]);
        if (!columns.length) {
            return;
        }
        var rows = this.languageData.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredLanguage = rows;
    };
    // getLangSelectInterpreter(language_id)
    InterpreterDetailsComponent.prototype.selectLangInterpreter = function () {
        var _this = this;
        this.service.getLangSelectInterpreter(this.lang_id)
            .subscribe(function (res) {
            // console.log("api response",res);
            _this.list_Obj = res['data'];
            _this.languageData = __spread(res['data']);
            // console.log("listttttttt", this.list_Obj);
            _this.filteredLanguage = _this.list_Obj;
        });
    };
    InterpreterDetailsComponent.prototype.interpreter = function () {
        this.router.navigate(['/languages/interpreter-detail']);
    };
    InterpreterDetailsComponent = __decorate([
        Component({
            selector: 'app-interpreter-details',
            templateUrl: './interpreter-details.component.html',
            styleUrls: ['./interpreter-details.component.scss']
        }),
        __metadata("design:paramtypes", [DataLayerService,
            NgbModal,
            ToastrService,
            ValidationsService,
            HttpService,
            Router])
    ], InterpreterDetailsComponent);
    return InterpreterDetailsComponent;
}());
export { InterpreterDetailsComponent };
//# sourceMappingURL=interpreter-details.component.js.map