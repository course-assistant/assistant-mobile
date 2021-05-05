<template>
  <div class="discussion-item">
    <!-- 头像部分 -->
    <div class="info">
      <img class="avatar" :src="discussion.student_avatar" alt="" />
      <div style="margin-left: 18rpx; margin-top: 10rpx">
        <p class="name">{{ discussion.student_name }}</p>
        <p class="date">{{ discussion.comment_date }}</p>
      </div>
    </div>

    <!-- 内容 -->
    <p class="content">
      {{ discussion.comment_content }}
    </p>
    <van-divider />
  </div>
</template>

<script>
export default {
  props: ['discussion'],
}
</script>

<style lang="scss" scoped>
.discussion-item {
  width: 100%;
  background: #fff;

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
</style>