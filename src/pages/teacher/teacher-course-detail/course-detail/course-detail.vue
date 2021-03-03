<template>
  <div class="teacher-course-detail">
    <van-tabs
      :active="active"
      @change="onTabChange"
      color="#4396f7"
      animated
      swipeable
      sticky
    >
      <van-tab title="学时">
        <Period />
      </van-tab>

      <van-tab title="讨论">
        <Discussion />
      </van-tab>

      <van-tab title="更多">
        <CourseMore />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Period from './view/period-teacher.vue';
import Discussion from './view/discussion-teacher';
import CourseMore from './view/course-more-teacher';

export default {

  data() {
    return {
      active: 0,

      course_id: 0
    }
  },

  components: {
    Period,
    Discussion,
    CourseMore
  },

  methods: {
    onTabChange(event) {
      console.log(event);

      wx.setNavigationBarTitle({
        title: '趣味表情'
      })
    }
  },

  beforeMount() {
    // 加载数据

  },

  onLoad(option) {
    this.course_id = option.course_id;
  }

}
</script>


<style lang="scss" scoped>
.teacher-course-detail {
  height: 100%;
  background: #fff;
}
</style>
