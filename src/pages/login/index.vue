<template>
  <div class="login">
    <img class="logo" src="https://cn.vuejs.org/images/logo.png" alt="" />

    <div class="form">
      <van-cell-group>
        <van-field
          :value="username"
          clearable
          label="用户名"
          placeholder="请输入账号"
        />
        <van-field
          :value="password"
          clearable
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>

    <van-button class="btn-login" type="primary" block>登录</van-button>

    <van-divider contentPosition="center">其他登录</van-divider>
    <div class="other-login">
      <i
        class="iconfont icon-qq"
        style="color: #0e90d2"
        @click="handleOtherLogin"
      ></i>
      <i
        class="iconfont icon-weibo"
        style="color: #dd514c"
        @click="handleOtherLogin"
      ></i>
      <i
        class="iconfont icon-weixin"
        style="color: #5eb95e"
        @click="handleOtherLogin"
      ></i>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast.js';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    jump() {
      console.log(0);
      wx.navigateTo({ url: '/pages/index/main' });
    },

    handleOtherLogin() {
      Toast('暂时没用此功能');
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  text-align: center;

  .logo {
    width: 250rpx;
    height: 250rpx;
    margin: 80rpx 0;
  }

  .form {
    margin-bottom: 10rpx;
  }

  .other-login {
    display: flex;
    justify-content: center;

    i {
      margin: 0 36rpx;
      font-size: 80rpx;
    }
  }
}
</style>