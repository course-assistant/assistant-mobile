<template>
  <div class="teacher-me">
    <div class="head">
      <img :src="avatar" alt="" />
      <span>{{ name }}</span>
    </div>
    <div class="margin"></div>

    <MyCell text="我的课程" icon="icon-app" color="#93a2f9" @click="jump" />
    <MyCell text="账号管理" @click="jump" />
    <div class="margin"></div>

    <MyCell text="帮助中心" @click="jump" />
    <MyCell text="关于" @click="jump" />
    <div class="margin"></div>

    <MyCell text="退出登录" @click="handleLogout" />

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import Dialog from '@/../static/vant/dialog/dialog';
import MyCell from '@/components/MyCell.vue';

export default {

  data() {
    return {
      name: wx.getStorageSync('hncj_assistant_wx_user_name'),
      avatar: wx.getStorageSync('hncj_assistant_wx_user_avatar')
    }
  },
  components: { MyCell },

  methods: {

    jump() {
      console.log('jump');
    },

    // 点击退出登录
    handleLogout() {
      Dialog.confirm({
        title: '提示',
        message: '确认退出？',
      }).then(async () => {
        this.$logout();
      }).catch(() => {
        // 操作取消
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.teacher-me {
  width: 100%;
  height: 100%;
  background: #f4f5f7;

  .head {
    width: 100%;
    height: 160rpx;
    background: #fff;
    display: flex;
    align-items: center;

    img {
      width: 120rpx;
      height: 120rpx;
      margin: 0 30rpx;
      border-radius: 50%;
    }
    span {
      font-size: 34rpx;
      // font-weight: bold;
    }
  }

  .margin {
    width: 100%;
    height: 16rpx;
    background: #f4f5f7;
  }
}
</style>