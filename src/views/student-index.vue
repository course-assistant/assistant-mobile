<template>
  <div class="student-index">
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="2000"
      :duration="500"
      indicator-color="#8d93b5"
      indicator-active-color="#fff"
    >
      <block v-for="(swiper, index) in swipers" :key="index">
        <swiper-item>
          <img :src="swiper" alt="" />
        </swiper-item>
      </block>
    </swiper>

    <!-- 应用 -->
    <div class="apps">
      <van-grid :border="false">
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">我的课程</p>
        </van-grid-item>
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 最近课程 -->
    <div class="recent-course">
      <p>最近课程</p>
      <div class="course-list">
        <div
          class="course-item"
          v-for="(course, index) in courses"
          :key="index"
        >
          <img class="cover" :src="course.course_cover" alt="" />
          <p class="name">{{ course.course_name }}</p>
          <p class="subname">{{ course.teacher_name }}</p>
        </div>
      </div>
    </div>

    <!-- old -->
    <!-- <div class="app">
      <div class="app-title"><p>学习</p></div>
      <van-grid :border="false">
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">我的课程</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-course" style="color: #08aeab"></i>
          <p class="name">自我评估</p>
        </van-grid-item>
      </van-grid>
    </div> -->

    <!-- 服务 -->
    <!-- <div class="app">
      <div class="app-title"><p>教学服务</p></div>
      <van-grid :border="false">
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-app" style="color: #4e8df6"></i>
          <p class="name">四六级</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-video" style="color: #4e8df6"></i>
          <p class="name">视频</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-book" style="color: #4e8df6"></i>
          <p class="name">图书</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-newspaper" style="color: #83c1ff"></i>
          <p class="name">报纸</p>
        </van-grid-item>
      </van-grid>
    </div> -->

    <!-- 工具 -->
    <!-- <div class="app">
      <div class="app-title"><p>工具</p></div>
      <van-grid :border="false">
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-random" style="color: #0590df"></i>
          <p class="name">成绩查询</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-more" style="color: #93a2f9"></i>
          <p class="name">更多工具</p>
        </van-grid-item>
      </van-grid>
    </div> -->

    <!-- 反馈 -->
    <!-- <div class="app">
      <div class="app-title"><p>反馈</p></div>
      <van-grid :border="false">
        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-feedback" style="color: #36a99e"></i>
          <p class="name">意见反馈</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-bug" style="color: #36cfc9"></i>
          <p class="name">Bug反馈</p>
        </van-grid-item>

        <van-grid-item class="app-item" use-slot @click="notNow">
          <i class="iconfont icon-github" style="color: #191717"></i>
          <p class="name">开源地址</p>
        </van-grid-item>
      </van-grid>
    </div> -->
  </div>
</template>

<script>
export default {

  data() {
    return {
      swipers: [
        'https://uc.chaoxing.com/backSchool/images/mBanner.png',
        'https://uc.chaoxing.com/backSchool/images/mBanner.png',
        'https://uc.chaoxing.com/backSchool/images/mBanner.png'
      ],

      courses: [
        {
          course_id: 0,
          course_name: '课程',
          teacher_name: '教师',
          course_cover: 'https://p.ananas.chaoxing.com/star3/origin/a597b7c95a3e72dbbdb21f17011ce85f.jpg'
        },
        // {
        //   course_id: 0,
        //   course_name: 'Web前端开发',
        //   teacher_name: '张妍琰',
        //   course_cover: 'https://p.ananas.chaoxing.com/star3/origin/a597b7c95a3e72dbbdb21f17011ce85f.jpg'
        // },
        // {
        //   course_id: 0,
        //   course_name: 'Web前端开发',
        //   teacher_name: '张妍琰',
        //   course_cover: 'https://p.ananas.chaoxing.com/star3/origin/a597b7c95a3e72dbbdb21f17011ce85f.jpg'
        // },
      ],
    }
  },

  methods: {
    // 刷新最近的4个课程
    async refreshRecentCourse() {
      this.$loading('Loading...');
      let [data, err] = await this.$awaitWrap(this.$get('course/findbystudentid', {
        id: wx.getStorageSync('hncj_assistant_wx_user_id'),
        page: 0,
        size: 4,
        status: 1
      }));
      if (err) {
        this.$message.warning(err);
        return;
      }
      this.courses = data.data;
      wx.hideLoading();
    },

    // 切换页面
    switchTab() {
      this.$emit('switchTab', 1);
    },

    // 提示功能还不可用
    notNow() {
      this.$toast('此功能目前在实验阶段，暂时不可用');
    },


  },

  async beforeMount() {
    await this.refreshRecentCourse();
  },
}
</script>

<style lang="scss" scoped>
.student-index {
  width: 100%;
  // height: 100%;
  background: #f7f7f7;
  overflow: auto;

  .swiper {
    width: 100%;
    height: 360rpx;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .apps {
    margin: 20rpx;
    padding: 0 15rpx;
    border-radius: 16rpx;
    background: #fff;
    .app-item {
      i {
        font-size: 58rpx;
        margin-bottom: 8rpx;
      }
      .name {
        margin-top: 5rpx;
        font-size: 24rpx;
      }
    }
  }

  .recent-course {
    p {
      margin: 0 0 10rpx 20rpx;
      font-size: 36rpx;
    }
    .course-list {
      margin: 0 20rpx;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .course-item {
        width: 49%;
        height: 280rpx;
        margin-bottom: 18rpx;
        background: #fff;
        border-radius: 16rpx;

        .cover {
          width: 100%;
          height: 190rpx;
          border-top-left-radius: 16rpx;
          border-top-right-radius: 16rpx;
          object-fit: cover;
          margin: 0;
          // background: seagreen;
        }

        .name {
          margin: 0;
          margin-top: -5rpx;
          margin-left: 15rpx;
          font-weight: bold;
          height: 40rpx;
          line-height: 40rpx;
          font-size: 28rpx;
          // background: salmon;
        }

        .subname {
          margin: 0;
          margin-left: 15rpx;
          height: 45rpx;
          line-height: 45rpx;
          font-size: 22rpx;
          // background: sandybrown;
        }
      }
    }
  }

  .app {
    .app-title {
      height: 55rpx;
      background: #f7f8f9;
      p {
        color: #9a9a9a;
        height: 55rpx;
        line-height: 55rpx;
        margin-left: 18rpx;
        font-size: 30rpx;
      }
    }

    // 单个应用的样式
    .app-item {
      i {
        font-size: 80rpx;
      }
      .name {
        margin-top: 15rpx;
        font-size: 28rpx;
      }
    }
  }
}
</style>