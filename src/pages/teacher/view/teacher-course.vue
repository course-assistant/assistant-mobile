<template>
  <div class="teacher-course">
    <!-- 顶部搜索框 -->
    <van-search placeholder="输入查找课程" @search="onSearch" />

    <div class="course-list">
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </div>
  </div>
</template>

<script>
import CourseItem from '../../../components/CourseItem.vue';

export default {

  data() {
    return {
    }
  },

  components: { CourseItem },

  methods: {

    // 点击搜索
    onSearch(event) {
      let word = event.mp.detail;
    },
  },

  // async beforeMount() {
  //   let [data, err] = await this.$awaitWrap(this.$get('course/findbyteacherid', {
  //     id: wx.getStorageSync('hncj_assistant_wx_user_id'),
  //     page: 0,
  //     size: 1000,
  //     status: 1
  //   }));

  //   console.log(data);

  // },
}
</script>

<style lang="scss" scoped>
.teacher-course {
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