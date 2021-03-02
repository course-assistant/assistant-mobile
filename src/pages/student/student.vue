<template>
  <div class="student">
    <div class="content">
      <StudentIndex v-if="active == 0" />

      <StudentHome v-if="active == 1" />
    </div>

    <!-- tabbar -->
    <van-tabbar :active="active" @change="onTabbarChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import StudentIndex from './view/student-index.vue';
import StudentHome from './view/student-home.vue';

export default {
  data() {
    return {
      active: 0
    }
  },

  components: {
    StudentIndex,
    StudentHome
  },

  methods: {

    // 点击下面的tabbar时
    onTabbarChange(event) {
      this.active = event.mp.detail;
    }
  },

}
</script>

<style lang="scss" scoped>
.student {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>