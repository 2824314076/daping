import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts/core'
import { LineChart, BarChart } from 'echarts/charts'
import { TitleComponent, GridComponent } from 'echarts/components'

// 初始化ECharts
echarts.use([LineChart, BarChart, TitleComponent, GridComponent])

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.mount('#app')

// 扩展类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $echarts: typeof echarts
  }
}
