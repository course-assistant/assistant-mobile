<template>
  <div class="period-detail">
    <van-tabs :active="active" color="#4396f7" animated swipeable sticky>
      <van-tab title="任务"> </van-tab>

      <van-tab title="随堂测试"> </van-tab>

      <van-tab title="课堂讨论"> </van-tab>
    </van-tabs>
  </div>
</template>

<script>


export default {

  data() {
    return {
      active: 0,

      period_id: 0
    }
  },

  // 加载数据
  async beforeMount() {
    let [data, err] = await this.$awaitWrap(this.$get('weekperiod/selectperiodbyperiodid', {
      id: this.period_id
    }));

    console.log(data);

    // 修改标题
    wx.setNavigationBarTitle({
      title: data.data.period_name
    })
    console.log(err);
  },

  onLoad(option) {
    this.period_id = option.period_id;
  }

}
</script>


<style lang="scss" scoped>
.period-detail {
  height: 100%;

  background: #f5f6f8;
}
</style>
