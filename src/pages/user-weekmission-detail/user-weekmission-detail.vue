<template>
  <div class="weekmission-detail">
    <p class="mission-content">{{ week_mission.week_mission_content }}</p>
  </div>
</template>

<script>


export default {

  data() {
    return {
      active: 0,

      week_mission: {}
    }
  },

  async beforeMount() {
    // 获取周任务详情
    wx.showLoading({
      title: '加载中',
    })

    let [data, err] = await this.$awaitWrap(this.$get('weekmission/selectbyid', {
      id: this.week_mission.week_mission_id
    }));
    console.log('获取周任务详情');
    console.log(data);
    this.week_mission = data.data;
    // 修改标题
    wx.setNavigationBarTitle({
      title: this.week_mission.week_mission_name
    })
    
    wx.hideLoading()
  },

  onLoad(option) {
    this.week_mission.week_mission_id = option.week_mission_id;
  }

}
</script>


<style lang="scss" scoped>
.weekmission-detail {
  height: 100%;
  padding: 20rpx;
  background: #fff;
}
</style>
