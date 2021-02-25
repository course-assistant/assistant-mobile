<template>
  <div class="container">
    <p>index 页面</p>
  </div>
</template>

<script>
export default {
  // 在挂载前判断是否登录，没有登录信息就跳转至登录页面
  beforeMount() {
    /*
        wx.redirectTo({ url: '/pages/login/main' });
        wx.showToast({
          title: '请登录',
          icon: 'none',
          duration: 2000
        })
    */

    this.$get('user/allUsers')
      .then(res => {
        console.log(res);
      });

    this.$post('user/findByIdPost', { id: 5 })
      .then(res => {
        console.log(res);
      });

  },
}
</script>


<style lang="scss" scoped>
.container {
  background: greenyellow;

  p {
    color: salmon;
  }
}
</style>
