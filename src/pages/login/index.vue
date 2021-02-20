<template>
  <div>
    <van-button @click="jump" type="primary">跳转</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      console.log(0);
      wx.navigateTo({ url: '/pages/index/main' });
    }
  },
}
</script>

<style>
</style>