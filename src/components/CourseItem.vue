<template>
  <div class="course-item">
    <img
      class="cover"
      src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg"
      alt=""
    />

    <div class="desc">
      <p class="course-name">网站设计技术</p>
      <p class="teacher-name">张妍琰</p>
    </div>

    <div class="symbol">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.course-item {
  position: relative;
  width: 100%;
  height: 140rpx;
  margin-top: 20rpx;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  background: #fff;

  .cover {
    width: 90rpx;
    height: 90rpx;
    border-radius: 12rpx;
    margin-left: 20rpx;
  }
  .desc {
    margin-left: 20rpx;
    .course-name {
      height: 55rpx;
      line-height: 55rpx;
      font-size: 32rpx;
    }

    .teacher-name {
      height: 60rpx;
      line-height: 60rpx;
      font-size: 24rpx;
      color: #999999;
    }
  }
  .symbol {
    position: absolute;
    right: 20rpx;
    color: #999999;
  }
}
</style>