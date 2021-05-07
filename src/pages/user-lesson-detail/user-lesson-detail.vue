<template>
  <div class="user-lesson-detail">
    <p class="title">主讲内容</p>
    <p class="content" v-html="lesson.lesson_content"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lesson_id: 0,

      lesson: {
        lesson_id: 0,
        lesson_name: '课时01',
        lesson_content: '（1）Android简介（了解）\n（2）Android Studio的安装与调试（掌握）。'
      }
    }
  },

  async beforeMount() {
    console.log('lesson_id: ' + this.lesson_id);
    await this.refresh();
  },

  methods: {
    async refresh() {

      // 处理换行
      this.lesson.lesson_content = this.convertHtml(this.lesson.lesson_content);
    },


  },

  onLoad(option) {
    this.lesson_id = option.lesson_id;
  }

}
</script>

<style lang="scss" scoped>
.user-lesson-detail {
  width: 100%;
  .title {
    margin-left: 10rpx;
    font-weight: bold;
  }

  .content {
    // margin-top: 10rpx;
    margin-left: 10rpx;
  }
}
</style>