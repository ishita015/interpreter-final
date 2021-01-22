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
var DashboardV3Component = /** @class */ (function () {
    function DashboardV3Component() {
    }
    DashboardV3Component.prototype.ngOnInit = function () {
        this.chartPie1 = __assign(__assign({}, echartStyles.defaultOptions), {
            series: [{
                    type: 'pie',
                    itemStyle: echartStyles.pieLineStyle,
                    data: [__assign(__assign({ name: 'Email Subscription', value: 80 }, echartStyles.pieLabelOff), { itemStyle: {
                                borderColor: '#4CAF50',
                            } }), __assign(__assign({ name: 'Registration', value: 20 }, echartStyles.pieLabelOff), { itemStyle: {
                                borderColor: '#df0029',
                            } })]
                }]
        });
        this.chartPie2 = __assign(__assign({}, echartStyles.defaultOptions), {
            series: [{
                    type: 'pie',
                    itemStyle: echartStyles.pieLineStyle,
                    data: [__assign(__assign({ name: 'Running', value: 40 }, echartStyles.pieLabelOff), { itemStyle: {
                                borderColor: '#ff9800',
                            } }), __assign(__assign({ name: 'Completed', value: 60 }, echartStyles.pieLabelOff), { itemStyle: {
                                borderColor: '#4CAF50',
                            } })]
                }]
        });
        this.chartBar1 = __assign(__assign({}, echartStyles.defaultOptions), {
            series: [{
                    type: 'bar',
                    barWidth: 6,
                    itemStyle: __assign({ color: '#ff9800' }, echartStyles.lineShadow),
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
}());
export { DashboardV3Component };
//# sourceMappingURL=dashboard-v3.component.js.map