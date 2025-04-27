<template>
  <div class="home">
    <div class="top">
      <div class="topleft">
        <ul>
          <li>河流监测</li>
          <li>水旱灾害</li>
          <li>供水保障</li>
          <li>水资源</li>
        </ul>
      </div>
      <div class="log">
        <img src="../assets/home/log.png">
      </div>
      <div class="topright">
        <ul>
          <li>水雨情</li>
          <li>水利工程</li>
          <li>视频监视</li>
          <li>四预</li>
        </ul>
      </div>
    </div>
    <daoing-home></daoing-home>
  </div>
</template>

<script lang="ts" setup>
import DaoingHome from "./home.vue";

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style xml:lang="sass" scoped>
.home {
  margin: 0;
  padding: 0;
}

.top {
  width: 100%;
  height: 10vh;
  background-image: url('../assets/home/hometop.png');
  background-size: 100% 60%;
  display: flex;
  justify-content: space-between;
  background-repeat: no-repeat;
}

.topleft {
  margin-left: 5%;

}

.topright {
  margin-right: 5%;
}

.log {
  z-index: 100;
}

.log img {
  width: 40vw;
  position: absolute;
  left: 32vw;
  top: -4vh;
}

ul {
  display: flex;
  list-style: none;
  margin-top: 0;
}

li {
  width: 8vw;
  height: 5vh;
  font-size: 1.5vw;
  font-weight: 900;
  text-align: center;
  line-height: 5vh;
}
</style>
