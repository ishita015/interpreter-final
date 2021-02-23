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
let CardMetricsComponent = /** @class */ (() => {
    let CardMetricsComponent = class CardMetricsComponent {
        constructor() {
            this.chartLine1 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [Object.assign(Object.assign({ data: [30, 40, 20, 50, 40, 80, 90] }, echartStyles.smoothLine), { lineStyle: Object.assign({ color: '#4CAF50' }, echartStyles.lineShadow), itemStyle: {
                            color: '#4CAF50'
                        } })]
            });
            this.chartLine2 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [Object.assign(Object.assign({ data: [6, 4, 7, 4, 6, 4, 1] }, echartStyles.smoothLine), { lineStyle: Object.assign({ color: '#df0029' }, echartStyles.lineShadow), itemStyle: {
                            color: '#df0029'
                        } })]
            });
            this.chartLine3 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [Object.assign(Object.assign({ data: [2, 2, 7, 4, 6, 4, 8] }, echartStyles.smoothLine), { lineStyle: Object.assign({ color: '#4CAF50' }, echartStyles.lineShadow), itemStyle: {
                            color: '#4CAF50'
                        } })]
            });
            this.chartLine4 = Object.assign(Object.assign({}, echartStyles.defaultOptions), {
                series: [Object.assign(Object.assign({ data: [2, 2, 7, 4, 6, 4, 1] }, echartStyles.smoothLine), { lineStyle: Object.assign({ color: '#df0029' }, echartStyles.lineShadow), itemStyle: {
                            color: '#df0029'
                        } })]
            });
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
        ngOnInit() {
        }
    };
    CardMetricsComponent = __decorate([
        Component({
            selector: 'app-card-metrics',
            templateUrl: './card-metrics.component.html',
            styleUrls: ['./card-metrics.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CardMetricsComponent);
    return CardMetricsComponent;
})();
export { CardMetricsComponent };
//# sourceMappingURL=card-metrics.component.js.map