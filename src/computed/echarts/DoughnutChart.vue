<template>
    <div ref="chartDom" class="LineChart"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, ref } from 'vue';
type EChartsOption = echarts.EChartsOption;
const chartDom = ref<HTMLElement>();
const myChart = ref<echarts.ECharts>();
const zongshu = ref(7625)
const shijian = ref('事件总数')

const arr = ref<string[]>([
    '{zongshu|' + zongshu.value + '\n\n}' + '{shijian|' + shijian.value + '}'
])
/**
 * 初始化图表函数
 *
 * 该函数用于初始化一个 ECharts 图表。
 *
 * @returns 无返回值
 */
// 引入防抖函数
import { debounce } from 'lodash-es';

const initChart = () => {
    if (!chartDom.value) return;

    // 销毁旧实例避免内存泄漏
    if (myChart.value) {
        myChart.value.dispose();
    }

    myChart.value = echarts.init(chartDom.value);

    // 获取容器尺寸
    const containerWidth = chartDom.value?.offsetWidth || 0;
    const containerHeight = chartDom.value?.offsetHeight || 0;
    const option: EChartsOption = {
        graphic: {
            type: 'image',
            style: {
                image: 'src/assets/home/shijian.png',
                width: Math.min(containerWidth, containerHeight) * 1.2,
                height: Math.min(containerWidth, containerHeight) * 1.2,

                aspectScale: 1
            } as any, // 使用类型断言解决官方类型定义问题
            left: 'center',
            top: 'middle'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['75%', '100%'],
                label: {
                    show: true,
                    position: 'center',
                    formatter: arr.value[0],
                    rich: {
                        name: {
                            fontSize: 10,
                            color: '#fff',

                        },
                        shijian: {
                            fontSize: 8,
                            color: '#fff'
                        }
                    }
                },
                data: [
                    {
                        value: 735,
                        itemStyle: {
                            // borderColor:'#EAB966',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(234, 185, 102, 0)' },
                                { offset: 0.6, color: 'rgba(234, 185, 102, 1)' },
                            ])
                        }

                    },
                    {
                        value: 580,
                        itemStyle: {
                            // borderColor:'#08B3D7',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(8, 179, 215, 1)' },
                                { offset: 0.6, color: 'rgba(8, 179, 215, 0)' },
                            ])
                        }

                    },
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.value.setOption(option);
};

onMounted(() => {
    initChart();
    window.addEventListener('resize', () => {
        myChart.value?.resize();
        // 使用双重保险确保尺寸更新
        requestAnimationFrame(() => {
            initChart();
            myChart.value?.resize();
        });
    });
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