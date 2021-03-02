<template>
  <div class="teacher">
    <div class="content">
      <TeacherIndex v-if="active == 0" />

      <TeacherHome v-if="active == 1" />
    </div>

    <!-- tabbar -->
    <van-tabbar :active="active" @change="onTabbarChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import TeacherIndex from './view/teacher-index.vue';
import TeacherHome from './view/teacher-home.vue';

export default {
  data() {
    return {
      active: 0
    }
  },

  components: {
    TeacherIndex,
    TeacherHome
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
.teacher {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>