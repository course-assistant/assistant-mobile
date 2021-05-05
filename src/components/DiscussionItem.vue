<template>
  <div class="discussion-item">
    <!-- 头像部分 -->
    <!-- <div class="info">
      <img class="avatar" :src="discussion.teacher_avatar" alt="" />
      <div style="margin-left: 18rpx; margin-top: 10rpx">
        <p class="name">{{ discussion.teacher_name }}</p>
        <p class="date">{{ discussion.discussion_date }}</p>
      </div>
    </div>

    <p class="content">
      {{ discussion.discussion_title }}
    </p> -->

    <!-- 内容 -->
    <!-- <p class="content">
      {{ discussion.discussion_content }}
    </p> -->

    <div
      class="discussion"
      @click="toDiscussionDetail(discussion.discussion_id)"
    >
      <van-tag plain type="primary" style="margin: 0 20rpx">讨论</van-tag>
      <span>{{ discussion.discussion_title }}</span>
    </div>

    <!-- <van-divider /> -->
  </div>
</template>

<script>
export default {
  props: ['discussion'],


  methods: {
    // 跳转到讨论详情
    toDiscussionDetail(id) {
      wx.navigateTo({
        url: `/pages/user-discussion-detail/main?discussion_id=${id}`
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.discussion-item {
  width: 100%;
  background: #fff;

  .discussion {
    height: 90rpx;
    border-bottom: solid 1px #f2f2f2;
    display: flex;
    align-items: center;
  }
}
</style>