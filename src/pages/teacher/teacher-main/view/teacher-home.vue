<template>
  <div class="teacher-home">
    <van-button type="primary" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击退出登录
    handleLogout() {
      this.$logout();
    }
  },
}
</script>

<style lang="scss" scoped>
.teacher-home {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>