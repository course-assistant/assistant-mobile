<template>
  <div class="login">
    <img class="logo" src="https://cn.vuejs.org/images/logo.png" alt="" />

    <div class="form">
      <van-cell-group>
        <van-field
          @change="usernameChange"
          clearable
          label="用户名"
          placeholder="请输入账号"
        />
        <van-field
          @change="passwordChange"
          clearable
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <van-dropdown-menu>
          <van-dropdown-item
            :value="loginForm.type"
            :options="types"
            @change="typeChange"
          />
        </van-dropdown-menu>
      </van-cell-group>
    </div>

    <van-button class="btn-login" type="primary" block @click="handleLogin">
      登录
    </van-button>

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

    <van-toast id="custom-selector" />
    <van-notify id="van-notify" />
  </div>
</template>

<script>
import Toast from '../../../static/vant/toast/toast.js';
import Notify from '../../../static/vant/notify/notify';
import MD5 from '../../util/MD5Util.js';

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        type: 2,
      },

      types: [
        { text: '教师', value: 2 },
        { text: '学生', value: 3 },
      ],
    }
  },
  methods: {


    async handleLogin() {
      // 显示加载框
      let toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '登录中...',
        selector: '#custom-selector',
      });

      let [data, err] = await this.$awaitWrap(this.$post('login', {
        username: this.loginForm.username,
        password: MD5(this.loginForm.password),
        type: this.loginForm.type
      }));
      if (err) {
        Notify({ type: 'danger', message: err });
        toast.clear();
        return;
      }
      console.log(data);
      // 清除加载框
      toast.clear();
      Notify({ type: 'success', message: data.msg });
    },

    handleOtherLogin() {
      Toast('暂时没用此功能');
    },

    // 监听数据变化并赋值的函数
    usernameChange(event) {
      this.loginForm.username = event.mp.detail;
    },
    passwordChange(event) {
      this.loginForm.password = event.mp.detail;
    },
    typeChange(event) {
      this.loginForm.type = event.mp.detail;
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

    .select-type {
      width: 50%;
    }
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