var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';
var DashboardV4Component = /** @class */ (function () {
    function DashboardV4Component(productService) {
        this.productService = productService;
    }
    DashboardV4Component.prototype.ngOnInit = function () {
        this.chartLineSmall1 = __assign(__assign({}, echartStyles.defaultOptions), {
            grid: echartStyles.gridAlignLeft,
            series: [__assign(__assign({ data: [30, 40, 20, 50, 40, 80, 90, 40] }, echartStyles.smoothLine), { lineStyle: __assign({ color: '#4CAF50' }, echartStyles.lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.lineChart1 = __assign(__assign({}, echartStyles.lineFullWidth), {
            series: [__assign(__assign({ data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90] }, echartStyles.smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(102, 51, 153, 0.68)',
                    }, itemStyle: {
                        color: '#663399'
                    } }), __assign(__assign({ data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30] }, echartStyles.smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(255, 152, 0, .6)',
                    }, itemStyle: {
                        color: 'rgba(255, 152, 0, 1)'
                    } })]
        });
        this.products$ = this.productService.getProducts();
    };
    DashboardV4Component = __decorate([
        Component({
            selector: 'app-dashboard-v4',
            templateUrl: './dashboard-v4.component.html',
            styleUrls: ['./dashboard-v4.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService])
    ], DashboardV4Component);
    return DashboardV4Component;
}());
export { DashboardV4Component };
//# sourceMappingURL=dashboard-v4.component.js.map