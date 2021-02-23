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
let DashboardV3Component = /** @class */ (() => {
    let DashboardV3Component = class DashboardV3Component {
        constructor() { }
        ngOnInit() {
            this.chartPie1 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [{
                        type: 'pie',
                        itemStyle: echartStyles.pieLineStyle,
                        data: [Object.assign(Object.assign({ name: 'Email Subscription', value: 80 }, echartStyles.pieLabelOff), { itemStyle: {
                                    borderColor: '#4CAF50',
                                } }), Object.assign(Object.assign({ name: 'Registration', value: 20 }, echartStyles.pieLabelOff), { itemStyle: {
                                    borderColor: '#df0029',
                                } })]
                    }]
            });
            this.chartPie2 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [{
                        type: 'pie',
                        itemStyle: echartStyles.pieLineStyle,
                        data: [Object.assign(Object.assign({ name: 'Running', value: 40 }, echartStyles.pieLabelOff), { itemStyle: {
                                    borderColor: '#ff9800',
                                } }), Object.assign(Object.assign({ name: 'Completed', value: 60 }, echartStyles.pieLabelOff), { itemStyle: {
                                    borderColor: '#4CAF50',
                                } })]
                    }]
            });
            this.chartBar1 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [{
                        type: 'bar',
                        barWidth: 6,
                        itemStyle: Object.assign({ color: '#ff9800' }, echartStyles.lineShadow),
                        data: [{
                                name: 'Bar 1',
                                value: 40
                            }, {
                                name: 'Bar 2',
                                value: 60,
                                itemStyle: {
                                    color: '#4CAF50'
                                }
                            }, {
                                name: 'Bar 3',
                                value: 80,
                            }, {
                                name: 'Bar 4',
                                value: 70,
                            }, {
                                name: 'Bar 5',
                                value: 60,
                            }, {
                                name: 'Bar 6',
                                value: 70,
                            }, {
                                name: 'Bar 7',
                                value: 80,
                            }, {
                                name: 'Bar 8',
                                value: 40,
                            }, {
                                name: 'Bar 9',
                                value: 70,
                                itemStyle: {
                                    color: '#4CAF50'
                                }
                            }]
                    }]
            });
        }
    };
    DashboardV3Component = __decorate([
        Component({
            selector: 'app-dashboard-v3',
            templateUrl: './dashboard-v3.component.html',
            styleUrls: ['./dashboard-v3.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DashboardV3Component);
    return DashboardV3Component;
})();
export { DashboardV3Component };
//# sourceMappingURL=dashboard-v3.component.js.map