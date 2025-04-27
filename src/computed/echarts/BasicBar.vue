<template>
    <div ref="chartDom" class="LineChart"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, ref } from 'vue';

type EChartsOption = echarts.EChartsOption;

const chartDom = ref<HTMLElement>();
const myChart = ref<echarts.ECharts>();
// 组件挂载后执行初始化图表操作
onMounted(() => {
    initChart();
    window.addEventListener('resize', () => myChart.value?.resize());
});

// 组件卸载前执行清理操作
onBeforeUnmount(() => {
    window.removeEventListener('resize', () => myChart.value?.resize());
    myChart.value?.dispose();
});
/**
 * 初始化图表
 * 通过echarts.init方法初始化图表实例，并通过setOption方法来设置图表的配置项和数据。
 */
const initChart = () => {
    if (!chartDom.value) return;

    myChart.value = echarts.init(chartDom.value);

    const option: EChartsOption = {
        legend: {
            right: '0%',
            textStyle: {
                fontSize: 9,
                color: '#fff',
            },
            backgroundColor: 'rgba(216, 240, 255, 0.1)',
            itemWidth: 5,
            itemHeight: 5,
            borderRadius: 20,
        },
        grid: {
            right: '-15%',
            // left:'15%'
        },
        xAxis: {
            type: 'category',
            data: ['水库1', '水库2', '水库3', '水库4', '水库5', '水库6', '水库7', '水库8']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '汛警水位',
                data: [290, 150, 200, 210, 205, 170, 200],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#3CDDEB' },
                        { offset: 0.6, color: '#0D315A' },
                    ])
                },
            },
            {
                name: '实时水位',
                data: [210, 160, 170, 165, 180, 110, 160],
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#EEEBD0' },
                        { offset: 0, color: '#EBD43C' },
                        { offset: 1, color: '#EEEDD0' }
                    ])
                },
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.value.setOption(option);
};

</script>
<style scoped>
.LineChart {
    width: 100%;
    height: 100%;
}
</style>
