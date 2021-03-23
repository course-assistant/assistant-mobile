<template>
  <div class="period-evaluation">
    <van-button
      class="btn-evaluate"
      round
      color="#ffd21e"
      size="small"
      icon="star-o"
      @click="toIssueEvaluation"
    >
      写评价
    </van-button>
    <!-- 空提示 -->
    <div v-if="evaluations == null || evaluations.length == 0">
      <van-empty image="search" description="暂无评价" />
    </div>

    <div v-else>
      <!-- 总分 -->
      <div class="rate">
        <div class="item">
          <span>
            教师教学质量 <span class="score">{{ rate }}</span> 分
          </span>
          <van-rate
            :value="rate"
            size="42rpx"
            icon="star"
            void-icon="star-o"
            allow-half
            readonly
          />
          <span class="num">35人</span>
        </div>

        <div class="item">
          <span>
            学生掌握程度 <span class="score">{{ rate }}</span> 分
          </span>
          <van-rate
            :value="rate"
            size="42rpx"
            icon="star"
            void-icon="star-o"
            allow-half
            readonly
          />
          <span class="num">35人</span>
        </div>
      </div>

      <!-- 评价列表 -->
      <div
        class="evaluation-item"
        v-for="(evaluation, index) in evaluations"
        :key="index"
      >
        <!-- 头像部分 -->
        <div class="info">
          <img class="avatar" :src="evaluation.student_avatar" alt="" />
          <div style="margin-left: 18rpx; margin-top: 10rpx">
            <p class="name">
              {{ evaluation.student_name }}
              <van-rate
                :value="rate"
                size="24rpx"
                icon="star"
                void-icon="star-o"
                allow-half
                readonly
              />
            </p>
            <p class="date">{{ evaluation.period_evaluate_date }}</p>
          </div>
        </div>

        <!-- 内容 -->
        <p class="content">{{ evaluation.period_evaluate_content }}</p>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script>
import EvaluationItem from '@/components/EvaluationItem.vue';

export default {

  data() {
    return {
      // 平均评分
      rate: 4.9,

      // 评价
      evaluations: [
        {
          student_id: 0,
          student_name: '张三',
          student_avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          period_evaluate_id: 0,
          period_id: 0,
          period_evaluate_content: '老师教的很好！',
          period_evaluate_date: '2021-3-4',
          period_evaluate_degree: 4,
          period_evaluate_quality: 5
        }
      ],

      showEvaluateDialog: false,
    }
  },

  components: { EvaluationItem },

  props: ['periodid'],

  methods: {
    toIssueEvaluation() {
      wx.navigateTo({
        url: `/pages/student-evaluate/main?period_id=${this.periodid}`
      });
    },
  },

  beforeMount() {
    if (this.role == null) {
      this.role = 'student'
    }
  },

}
</script>

<style lang="scss" scoped>
.period-evaluation {
  position: relative;

  .btn-evaluate {
    position: absolute;
    bottom: 30rpx;
    right: 20rpx;
    z-index: 99;
  }

  .rate {
    width: calc(100% - 30rpx);
    margin: 15rpx;
    border-radius: 10rpx;
    background: #fef3da;

    .item {
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 28rpx;
      }

      .score {
        color: #ffd21e;
        font-size: 44rpx;
      }

      .num {
        color: #c0c0c0;
      }
    }
  }

  .evaluation-item {
    width: 100%;

    .info {
      margin: 0 20rpx;
      display: flex;
      .avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 12rpx;
      }
      .name {
        height: 40rpx;
        line-height: 40rpx;
        font-size: 28rpx;
      }
      .date {
        height: 40rpx;
        line-height: 40rpx;
        font-size: 24rpx;
      }
    }

    .content {
      margin: 0 20rpx;
      margin-left: 117rpx;
    }
  }
}
</style>