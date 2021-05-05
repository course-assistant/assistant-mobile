<template>
  <div class="student-course-detail">
    <div class="head">
      <img class="head" :src="course_data.course_cover" alt="" />
      <p class="course-name">{{ course_data.course_name }}</p>
      <p class="teacher-name">{{ course_data.teacher_name }}</p>
    </div>

    <van-tabs
      :active="active"
      @change="onTabChange"
      color="#4396f7"
      animated
      swipeable
      sticky
    >
      <!-- 教学内容 -->
      <van-tab title="教学内容"> </van-tab>

      <!-- 任务 -->
      <van-tab title="任务"> </van-tab>

      <!-- 课堂讨论 -->
      <van-tab title="课堂讨论">
        <CourseDiscussion ref="discussion" :course_id="course_data.course_id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import Period from '@/views/student-course-periods.vue';

import DiscussionItem from '@/components/DiscussionItem.vue';

import WeekMission from '@/views/student-course-weekmissions.vue';


import CourseLesson from '@/views/user-course-mission.vue';
import CourseDiscussion from '@/views/user-course-discussion.vue';

export default {

  data() {
    return {
      isShow: [],
      activeNames: ['1'],

      active: 0,

      course_data: {
        course_id: 0
      },
    }
  },

  components: {
    Period,
    WeekMission,
    DiscussionItem,

    CourseLesson,
    CourseDiscussion
  },

  methods: {
    // 加载数据
    async refresh() {
      this.$loading('加载中...');
      console.log(44);
      this.$refs.discussion.refresh();
      wx.hideLoading();
    },
  },

  async beforeMount() {
    // 加载数据
    let [data, err] = await this.$awaitWrap(this.$get('course/findbyid', {
      id: this.course_data.course_id
    }));
    console.log('获取课程详情');
    console.log(data);
    this.course_data = data.data;

    // 更新标题
    wx.setNavigationBarTitle({
      title: this.course_data.course_name
    })
  },

  async mounted() {
    // 刷新子组件
    await this.refresh();
  },

  onLoad(option) {
    this.course_data.course_id = option.course_id;
  }

}
</script>


<style lang="scss" scoped>
.student-course-detail {
  height: 100%;

  // background: #f5f6f8;
  background: #fff;

  .head {
    position: relative;
    img {
      width: 100%;
      height: 270rpx;
      object-fit: cover;
      vertical-align: middle;
    }

    .course-name {
      position: absolute;
      top: 155rpx;
      left: 25rpx;
      padding: 0;
      font-size: 36rpx;
      font-weight: bold;
      color: #fff;
    }

    .teacher-name {
      position: absolute;
      top: 210rpx;
      left: 25rpx;
      padding: 0;
      font-size: 26rpx;
      color: #fff;
    }

    .discussion {
      background: pink;
    }
  }
}
</style>
