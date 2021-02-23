let echartStyles = /** @class */ (() => {
    class echartStyles {
    }
    echartStyles.smoothLine = {
        type: 'line',
        smooth: true
    };
    echartStyles.lineShadow = {
        shadowColor: 'rgba(0, 0, 0, .2)',
        shadowOffsetX: -1,
        shadowOffsetY: 8,
        shadowBlur: 10
    };
    echartStyles.gridNoAxis = {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    };
    echartStyles.pieRing = {
        radius: ['50%', '60%'],
        selectedMode: true,
        selectedOffset: 0,
        avoidLabelOverlap: false,
    };
    echartStyles.pieLabelOff = {
        label: { show: false },
        labelLine: { show: false, emphasis: { show: false } },
    };
    echartStyles.pieLabelCenterHover = {
        normal: {
            show: false,
            position: 'center'
        },
        emphasis: {
            show: true,
            textStyle: {
                fontWeight: 'bold'
            }
        }
    };
    echartStyles.pieLineStyle = Object.assign({ color: 'rgba(0,0,0,0)', borderWidth: 2 }, echartStyles.lineShadow);
    echartStyles.pieThikLineStyle = Object.assign({ color: 'rgba(0,0,0,0)', borderWidth: 12 }, echartStyles.lineShadow);
    echartStyles.gridAlignLeft = {
        show: false,
        top: 6,
        right: 0,
        left: '-6%',
        bottom: 0
    };
    echartStyles.defaultOptions = {
        grid: {
            show: false,
            top: 6,
            right: 0,
            left: 0,
            bottom: 0
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: true
        },
        yAxis: {
            type: 'value',
            show: false
        }
    };
    echartStyles.lineFullWidth = {
        grid: {
            show: false,
            top: 0,
            right: '-9%',
            left: '-8.5%',
            bottom: 0
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            show: true
        },
        yAxis: {
            type: 'value',
            show: false,
        }
    };
    echartStyles.lineNoAxis = {
        grid: echartStyles.gridNoAxis,
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 0, 0, .1)'
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }
            }
        }
    };
    return echartStyles;
})();
export { echartStyles };
//# sourceMappingURL=echart-styles.js.map