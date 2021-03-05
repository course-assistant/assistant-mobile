<template>
  <div class="period-detail">
    <van-tabs :active="active" color="#4396f7" animated swipeable sticky>
      <van-tab title="任务">
        <div class="mission">
          <p>任务详情</p>
          <p>{{ period.period_content }}</p>
        </div>
      </van-tab>

      <van-tab title="随堂测试">
        <div class="tests">
          <div class="test-item">
            <img
              src="https://mooc1-api.chaoxing.com/images/work/phone/task-work-gray.png"
              alt=""
            />
            <p class="test-name">第01次测试</p>
            <p class="test-status">未发布</p>
          </div>
          <!-- <div class="test-item"></div>
          <div class="test-item"></div>
          <div class="test-item"></div> -->
        </div>
      </van-tab>

      <van-tab title="课堂讨论">
        <div class="discussions">所有讨论</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>


export default {

  data() {
    return {
      active: 1,

      period: {
        period_id: 0
      }

    }
  },

  // 加载数据
  async beforeMount() {
    // 获取学时详情
    let [data, err] = await this.$awaitWrap(this.$get('weekperiod/selectperiodbyperiodid', {
      id: this.period.period_id
    }));
    console.log('获取学时详情');
    console.log(data);
    this.period = data.data;
    // 修改标题
    wx.setNavigationBarTitle({
      title: data.data.period_name
    })
    console.log(err);

    console.log(22);

    // 获取随堂测试



    // 获取课堂讨论
    [data, err] = await this.$awaitWrap(this.$get('discussioncomment/selectdissbyperiodid', {
      id: this.period.period_id
    }));
    console.log('获取课堂讨论');
    console.log(data);
  },

  onLoad(option) {
    this.period.period_id = option.period_id;
  }

}
</script>


<style lang="scss" scoped>
.period-detail {
  height: 100%;
  background: #fff;

  .mission {
    height: 100%;
  }

  .tests {
    .test-item {
      position: relative;
      height: 120rpx;
      border-bottom: solid 1px #f2f2f2;
      display: flex;
      align-items: center;

      img {
        width: 80rpx;
        height: 80rpx;
        margin: 0 20rpx;
        border-radius: 10rpx;
      }
      
      .test-status {
        position: absolute;
        right: 40rpx;
      }
      // background: palevioletred ;
    }
  }
}
</style>
