<template>
  <div class="student-home">
    <van-button type="primary" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击退出登录
    handleLogout() {
      // 清除所有缓存


      // 重定向到登录页面
      wx.redirectTo({ url: '/pages/login/main' });
    }
  },
}
</script>

<style lang="scss" scoped>
.student-home {
  width: 100%;
  height: 100%;
  background: lightblue;
}
</style>