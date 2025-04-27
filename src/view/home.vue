<template>
    <div class="home">
        <div class="left">

        </div>
        <div class="center">
            <div>
                <div class="zaihai">
                    <div class="fangyu">
                        <div class="fangyufont table">水旱灾害防御</div>
                        <div class="homeday">
                            <div>昨日</div>
                            <div>今日</div>
                        </div>
                    </div>
                    <div class="jiagnshui">
                        <div style="display: flex" v-for="item in 2">
                            <div>
                                <div>
                                    <div>
                                        <div id="main">{{ item }}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div><text>79</text>mm</div>
                                <div>24小时累计降水</div>
                            </div>
                        </div>
                    </div>
                    <div class="fangyubutton">
                        <img src="../assets/home/fangyubutton.png">
                    </div>
                </div>
                <div class="frame">
                    <div class="shebei">
                        <div class="zaixian">
                            <text>98</text> %
                        </div>
                        <div>设备在线率</div>
                    </div>
                    <div class="gaojing">
                        <div class="jingjiexian" v-for="item in a">
                            <div>
                                <img :src=item.Frame>
                                河道超警戒告警
                            </div>
                            <div style="display: flex">
                                <div>98</div>
                                <div>个</div>
                                <div :style="item.color"><img :src="item.Vector">2.5%</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style="margin-top: 2vh;">
                    <div class="table">
                        <div style="margin-left: 13%;font-size: 1.5vw;font-weight: 900;line-height: 5vh;">水库水情</div>
                    </div>
                    <BasicBar style="width: 100%;height: 100% " />
                </div>
                <div style="margin-top: 2vh;">
                    <div style="display: flex;justify-content: space-between;margin-bottom: 2vh;" class="table">
                        <div style="margin-left: 13%;font-size: 1.5vw;font-weight: 900;line-height: 5vh;">水资源管理信息</div>
                        <div style="display: flex;font-size: .8vw;">
                            <div v-for="item in 2"
                                style="border: 1px solid #2354AD;margin-left: 2vw;line-height: 5vh;text-align: center;width: 5vw;">
                                用水总量</div>
                        </div>
                    </div>
                    <LineChart style="width: 100%;height: 100% " />
                </div>
            </div>
            <div class="zhuanxian">
                <div v-for="item in 4">功能区划</div>
            </div>
        </div>

        <div>
            <div style="width: 30vw;display: flex;justify-content: space-between;">
                <div style="width: 12vw;display: flex;justify-content: space-between;">
                    <div style="width: 4vw;height: 4vw;border-radius: 5%;border: 2px solid #45A5F9;">
                        <img style="width: 60%;height: 60%;" src="../assets/home/heliu.svg">
                    </div>
                    <div>
                        <div style="font-size: 1vw;">河流总数(条)</div>
                        <div>3820</div>
                    </div>
                </div>
                <div style="width: 12vw;display: flex;justify-content: space-between;">
                    <div style="width: 4vw;height: 4vw;border-radius: 5%;border: 2px solid #FFE680;">
                        <img style="width: 60%;height: 60%;" src="../assets/home/hechang.svg">
                    </div>
                    <div>
                        <div style="font-size: 1vw;">河流总数(条)</div>
                        <div>3820</div>
                    </div>
                </div>
            </div>
            <div style="margin-top: 5%;">
                <div style="display: flex;">
                    <div
                        style="width: 15vw;height: 20vh;background-image: url('../assets/home/shijian.png');background-size: 100% 100%;">
                        <DoughnutChart style="width: 100%;height: 100%" />
                    </div>
                    <div style="width: 15vw;margin-top: 5%;">
                        <div
                            style="height:5vh;line-height:5vh;display: flex;margin-bottom: 2vh;background: linear-gradient(90deg, #002458 0%, rgba(0, 36, 88, 0) 99%);">
                            <div style="margin-left: 5%;"></div>
                            <div style="margin-left: 5%;">已办事件</div>
                            <div style="margin-left: 5%;">2560</div>
                            <div style="margin-left: 5%;">73%</div>
                        </div>
                        <div
                            style="height:5vh;line-height:5vh;display: flex;margin-bottom: 2vh;background: linear-gradient(90deg, #002458 0%, rgba(0, 36, 88, 0) 99%);">
                            <div style="margin-left: 5%;"></div>
                            <div style="margin-left: 5%;">已办事件</div>
                            <div style="margin-left: 5%;">2560</div>
                            <div style="margin-left: 5%;">73%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <div style="margin-top: 2vh;">
                    <div style="display: flex;justify-content: space-between;margin-bottom: 2vh;" class="table">
                        <div style="margin-left: 13%;font-size: 1.5vw;font-weight: 900;line-height: 5vh;">监测站水情</div>
                        <div style="display: flex;font-size: .8vw;">
                            <div v-for="item in 2"
                                style="border: 1px solid #2354AD;margin-left: 2vw;line-height: 5vh;text-align: center;width: 5vw;">
                                用水总量</div>
                        </div>
                    </div>
                    <LineChart style="width: 100%;height: 100% " />
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import LineChart from '../computed/echarts/LineChart.vue';
import BasicBar from '../computed/echarts/BasicBar.vue';
import DoughnutChart from '../computed/echarts/DoughnutChart.vue'
let a = ref([
    {
        Frame: 'src/assets/home/Frametop.png',
        Vector: 'src/assets/home/VectorTop.png',
        color: 'color:#FF9900;'
    },
    {
        Frame: 'src/assets/home/Framebutton.png',
        Vector: 'src/assets/home/VectorButton.png',
        color: 'color:#00EAFF;'
    }
])
</script>
<style xml:lang="sass" scoped>
.home {
    background-color: rgba(6, 25, 52, 0.49);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    .left {
        width: 5vw;
        height: 80vh;
        background-image: url("../assets/home/left.png");
        background-size: 100% 100%;
    }

    .right {
        width: 5vw;
        background-image: url("../assets/home/right.png");
        background-size: 100% 100%;
    }
}

.center {
    display: flex;

    .zhuanxian {
        width: 10vw;
        text-align: center;
        margin-top: 5vh;
        font-size: 1vw;

        div {
            background-image: url("../assets/home/Rectangle.png");
            background-size: 100% 100%;
            height: 4vh;
            height: 4vh;
            margin-bottom: 3vh;
            line-height: 4vh;
        }
    }
}

.zaihai {
    width: 30vw;

    .fangyu {
        width: 30vw;
        display: flex;
        justify-content: space-between;

        .fangyufont {
            width: 20vw;
            font-size: 1.5vw;
            padding-left: 3vw;
        }

        .homeday {
            width: 10vw;
            height: 5vh;
            display: flex;
            font-size: .8vw;
            justify-content: space-between;

            div {
                width: 4vw;
                border: 1px solid #3C79D6;
                text-align: center;
                line-height: 5vh;
            }
        }
    }

    .fangyubutton {
        width: 30vw;

        img {
            width: 100%;
        }
    }

    .jiagnshui {
        display: flex;
        justify-content: space-around;
        font-size: 1vw;
    }
}

.frame {
    display: flex;
    margin-top: 1vh;

    .shebei {
        text-align: center;
        width: 10vw;
        background-image: url("../assets/home/shebei.png");
        background-size: 100% 100%;
        font-size: 1vw;
        line-height: 4vh;

        div {
            font-weight: 100;
        }

        .zaixian {
            margin-top: 1vh;

            text {
                font-weight: 500;
                font-size: 3vw;
            }
        }
    }

    .gaojing {
        margin-left: 3%;
        width: 20vw;
        font-size: 1.3vw;
        height: 11vh;
        line-height: 5vh;

        .jingjiexian {
            margin-bottom: 1vh;
            background-image: url("../assets/home/gaojing.png");
            background-size: 100% 100%;
        }

        div {
            display: flex;
            justify-content: space-between;
        }

        img {
            width: 1vw;
            height: 1vw;
            margin-top: 1.5vh;
            margin-left: .5vw;
        }
    }
}

.table {
    background-image: url("../assets/home/fangyutop.png");
    background-size: 100% 100%;
}
</style>