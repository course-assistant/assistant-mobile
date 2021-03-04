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
        <Period :course_id="course_data.course_id" ref="period" />
      </van-tab>

      <van-tab title="讨论">
        <Discussion />
      </van-tab>

      <van-tab title="更多">
        <CourseMore />
      </van-tab>
    </van-tabs>

    <van-toast id="custom-selector" />
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

      course_data: {
        course_id: 0
      }

    }
  },

  components: {
    Period,
    Discussion,
    CourseMore
  },

  methods: {
    onTabChange(event) {
    }
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

    // 刷新子组件
    this.$refs.period.refresh();
  },

  onLoad(option) {
    this.course_data.course_id = option.course_id;
  }

}
</script>


<style lang="scss" scoped>
.teacher-course-detail {
  height: 100%;
  background: #fff;
}
</style>
