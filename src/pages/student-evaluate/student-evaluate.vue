<template>
  <div class="student-evaluate">
    <!-- 评分 -->
    <div class="rate">
      <p>教学质量</p>
      <van-rate
        :value="rate"
        size="60rpx"
        icon="star"
        void-icon="star-o"
        @change="onQualityChange"
      />
    </div>
    <div class="rate">
      <p>掌握程度</p>
      <van-rate
        :value="rate"
        size="60rpx"
        icon="star"
        void-icon="star-o"
        @change="onDegreeChange"
      />
    </div>

    <!-- 评价 -->
    <div class="evaluate">
      <textarea class="text" placeholder="请输入评价" @input="onTextInput" />
    </div>

    <!-- 评价按钮 -->
    <van-button class="btn-evaluate" round color="#feb11d" @click="issue">
      发表评价
    </van-button>

    <!-- 确认弹框 -->
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import Dialog from '@/../static/vant/dialog/dialog';

export default {
  data() {
    return {
      degree: 0,
      quality: 0,
      content: ''
    }
  },

  methods: {
    issue() {
      // console.log(this.period_id);
      // console.log(wx.getStorageSync('hncj_assistant_wx_user_id'));
      // console.log(this.degree);
      // console.log(this.quality);
      // console.log(this.content);

      Dialog.confirm({
        title: '提示',
        message: '评价发布后将不可修改，确定发布？',
      }).then(async () => {
        
      }).catch(() => {
      });

    },

    onQualityChange(e) {
      this.quality = e.mp.detail;
    },

    onDegreeChange(e) {
      this.degree = e.mp.detail;
    },

    onTextInput(e) {
      this.content = e.mp.detail.value;
    }
  },

  onLoad(option) {
    this.period_id = option.period_id;
  },
}
</script>

<style lang="scss" scoped>
.student-evaluate {
  overflow: auto;
  .rate {
    margin: 20rpx 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    // background: sandybrown;

    p {
      margin-right: 10rpx;
    }
  }

  .evaluate {
    .text {
      width: calc(100% - 70rpx);
      height: 300rpx;
      margin: 20rpx;
      padding: 15rpx;
      background: #f3f3f3;
      border-radius: 10rpx;
    }
  }

  .btn-evaluate {
    float: right;
    margin-right: 20rpx;
  }
}
</style>