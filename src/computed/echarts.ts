import { getCurrentInstance } from 'vue';
// 添加类型断言确保类型安全
const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts as typeof import('echarts/core') | undefined;

import type { GaugeSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// 添加空值检查和更安全的调用方式
if (echarts) {
    echarts.use([CanvasRenderer]);
} else {
    console.error('ECharts实例未初始化');
}

type EChartsOption = import('echarts/core').ComposeOption<GaugeSeriesOption>;

// 安全获取DOM元素
const chartDom = document.getElementById('main');
if (!chartDom) {
    throw new Error('找不到图表容器元素 #main');
}
const myChart = echarts?.init(chartDom);
if (!myChart) {
    throw new Error('ECharts实例初始化失败');
}
let option: EChartsOption;

const gaugeData = [
    {
        value: 60,
        title: {
            offsetCenter: ['0%', '30%']
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
        }
    }
];

option = {
    series: [
        {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#464646'
                }
            },
            axisLine: {
                lineStyle: {
                    width: 40
                }
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                distance: 50
            },
            data: gaugeData
        }
    ]
};

setInterval(function () {
    // 更新仪表盘数据（修复索引越界错误）
    gaugeData.forEach((item, index) => {
        item.value = +(Math.random() * 100).toFixed(2);
    });
// 安全更新图表选项
if (myChart) {
    myChart.setOption({
        series: [
            {
                data: gaugeData,
                pointer: {
                    show: false
                }
            }
        ]
    } as EChartsOption);
}
}, 2000);

// 安全设置初始选项
if (option && myChart) {
    myChart.setOption(option);
}
