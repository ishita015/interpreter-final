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
let DashboardV4Component = /** @class */ (() => {
    let DashboardV4Component = class DashboardV4Component {
        constructor(productService) {
            this.productService = productService;
        }
        ngOnInit() {
            this.chartLineSmall1 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                grid: echartStyles.gridAlignLeft,
                series: [Object.assign(Object.assign({ data: [30, 40, 20, 50, 40, 80, 90, 40] }, echartStyles.smoothLine), { lineStyle: Object.assign({ color: '#4CAF50' }, echartStyles.lineShadow), itemStyle: {
                            color: '#4CAF50'
                        } })]
            });
            this.lineChart1 = Object.assign(Object.assign({}, echartStyles.lineFullWidth), {
                series: [Object.assign(Object.assign({ data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90] }, echartStyles.smoothLine), { markArea: {
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
                        } }), Object.assign(Object.assign({ data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30] }, echartStyles.smoothLine), { markArea: {
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
        }
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
})();
export { DashboardV4Component };
//# sourceMappingURL=dashboard-v4.component.js.map