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
var CardWidgetsComponent = /** @class */ (function () {
    function CardWidgetsComponent() {
    }
    CardWidgetsComponent.prototype.ngOnInit = function () {
        this.chartOption1 = __assign(__assign({}, echartStyles.lineFullWidth), {
            series: [__assign(__assign({ data: [30, 40, 20, 50, 40, 80, 90] }, echartStyles.smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#663399',
                    }, itemStyle: {
                        color: '#663399'
                    } })]
        });
        this.chartOption2 = __assign(__assign({}, echartStyles.lineFullWidth), {
            series: [__assign(__assign({ data: [30, 10, 40, 10, 40, 20, 90] }, echartStyles.smoothLine), { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#ff9800'
                    }, itemStyle: {
                        color: '#ff9800'
                    } })]
        });
        this.chartPie1 = __assign(__assign({}, echartStyles.defaultOptions), {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [__assign(__assign({ type: 'pie' }, echartStyles.pieRing), { label: echartStyles.pieLabelCenterHover, data: [{
                            name: 'Completed',
                            value: 80,
                            itemStyle: {
                                color: '#4CAF50',
                            }
                        }, {
                            name: 'Pending',
                            value: 20,
                            itemStyle: {
                                color: '#df0029',
                            }
                        }] })]
        });
    };
    CardWidgetsComponent = __decorate([
        Component({
            selector: 'app-card-widgets',
            templateUrl: './card-widgets.component.html',
            styleUrls: ['./card-widgets.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CardWidgetsComponent);
    return CardWidgetsComponent;
}());
export { CardWidgetsComponent };
//# sourceMappingURL=card-widgets.component.js.map