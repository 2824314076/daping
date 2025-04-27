<template>
    <div ref="chartDom" class="LineChart"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, ref } from 'vue';

type EChartsOption = echarts.EChartsOption;

const chartDom = ref<HTMLElement>();
const myChart = ref<echarts.ECharts>();

const initChart = () => {
    if (!chartDom.value) return;

    myChart.value = echarts.init(chartDom.value);

    const option: EChartsOption = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['中村镇', '土沃乡', '张乡村', '龙港镇', '郑庄镇', '苏庄乡']
        },
        yAxis: {
            type: 'value',
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            right: '-15%',
        },
        legend: {
            right: '0%',
            data: ['实际线', '红线值'],
            textStyle: {
                fontSize:9,
                color: '#fff',
            },
            backgroundColor: 'rgba(216, 240, 255, 0.1)',
            itemWidth:20,
            itemHeight:5,
            // lineStyle: {
            //     color: '#00D5FF',

            // },
        },
        series: [
            {
                name: '实际线',
                type: 'line',
                stack: 'Total',
                color: '#00D5FF',
                data: [880, 800, 910, 830, 890, 905],

            },
            {
                name: '红线值',
                type: 'line',
                stack: 'Total',
                color: '#1978E5',
                data: [700, 400, 550, 900, 550, 950],

            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.value.setOption(option);
};

onMounted(() => {
    initChart();
    window.addEventListener('resize', () => myChart.value?.resize());
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => myChart.value?.resize());
    myChart.value?.dispose();
});
</script>
<style scoped>
    .LineChart {
        width: 100%;
        height: 100%;
}
</style>
