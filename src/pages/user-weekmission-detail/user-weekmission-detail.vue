<template>



    <div class="weekmission-detail">
      <!-- 主要内容 -->
      <div style="font-weight: bold;font-size: 20px;margin-bottom: 20px;">
          任务1

      </div>


      <div>
        <div style="font-weight: bold;margin-bottom: 10px;">主要内容</div>
        <div style="font-size: 14px;margin-bottom: 10px;">
          与现实生活一致：与现实生活的流程、
          逻辑保持一致，遵循用户习惯的语言和概念；
        </div>


        <div style="font-weight: bold;margin-bottom: 10px;">
          主要目标
        </div>

        <div>
          <span style="font-size: 16px;">记忆目标：</span>
          <span style="font-size: 14px;">
            HTML、CSS、JavaScript
          </span>
        </div>


        <div>
          <span style="font-size: 16px;">理解目标：</span>
          <span style="font-size: 14px;">
            JQuery等前端库
          </span>
        </div>


      </div>



<!--      <div>-->
<!--        <h1>主要内容</h1>-->
<!--        <p class="mission-content" v-html="missionContent"></p>-->
<!--      </div>-->

<!--      &lt;!&ndash; 周目标 &ndash;&gt;-->
<!--      <div>-->
<!--        <p>本周目标</p>-->
<!--        <div>-->
<!--          <p v-for="(goal, index) in week_goals" :key="index">-->
<!--            {{ goal.week_goal_title }}：{{ goal.week_goal_content }}-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
    </div>

</template>

<script>


export default {

  data() {
    return {
      active: 0,

      // 周任务
      week_mission: {
        week_mission_content: ''
      },

      // 周目标
      week_goals: [
        {
          week_goal_id: 0,
          week_goal_title: '教学目标',
          week_goal_content: 'HTML'
        }
      ],
    }
  },

  computed: {
    missionContent() {
      let content = this.week_mission.week_mission_content.replace(/\n/g, '<br>');
      return content;
    }
  },


  methods: {

    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },

    // 刷新周任务
    //   async refreshWeekMission() {
    //     let [data, err] = await this.$awaitWrap(this.$get('weekmission/selectbyweekid', {
    //       id: this.week_id
    //     }));
    //     if (err) {
    //       this.$catch(err);
    //       return;
    //     }
    //     this.week_mission = data.data;
    //     // 修改标题
    //     wx.setNavigationBarTitle({
    //       title: this.week_mission.week_mission_name
    //     })
    //   },
    //
    //
    //   // 刷新周目标
    //   async refreshWeekGoal() {
    //     let [data, err] = await this.$awaitWrap(this.$get('weekgoal/selectbyweekid', {
    //       id: this.week_id
    //     }));
    //     if (err) {
    //       this.$catch(err);
    //       return;
    //     }
    //     this.week_goals = data.data;
    //   },
    // },
    //
    // // 刷新内容
    // async beforeMount() {
    //   this.$loading('加载中');
    //   await this.refreshWeekMission();
    //   await this.refreshWeekGoal();
    //   wx.hideLoading()
    // },
    //
    // onLoad(option) {
    //   this.week_id = option.week_id;
    // }
  }
}
</script>


<style lang="scss" scoped>
.weekmission-detail {
  padding: 20rpx;
  background: #fff;
}
</style>
