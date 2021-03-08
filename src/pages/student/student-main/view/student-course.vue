<template>
  <div class="student-course">
    <!-- 顶部搜索框 -->
    <van-search placeholder="输入查找课程" @search="onSearch" />

    <div class="course-list">
      <CourseItem
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
        @jump="jump"
      />
    </div>
  </div>
</template>

<script>
import CourseItem from '../../../../components/CourseItem.vue';

export default {
  data() {
    return {
      courses: [
        {
          course_id: 0,
          teacher_name: '教师名',
          course_cover: 'https://cn.vuejs.org/images/logo.png',
          course_name: "课程名"
        }
      ]
    }
  },

  components: { CourseItem },

  methods: {
    jump(course_id) {
      console.log(course_id);
    }
  },

  async beforeMount() {
    this.$loading();

    console.log('b m');

    setTimeout(() => {
      wx.hideLoading();
    }, 1000);
  },

}
</script>

<style lang="scss" scoped>
.student-course {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  .course-list {
    flex: 1;
    overflow: auto;
    background: #eeeff3;
    padding: 0 20rpx 20rpx 20rpx;
  }
}
</style>