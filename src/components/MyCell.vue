<template>
  <div class="my-cell" @click="onClick">
    <i class="iconfont icon-more" style="color: #93a2f9"></i>
    <span>{{ text }}</span>
    <i class="iconfont icon-right arrow" style="color: gray"></i>
  </div>
</template>

<script>
export default {

  props: ['text'],

  methods: {
    onClick() {
      this.$emit('click');
    }
  },

}
</script>

<style lang="scss" scoped>
.my-cell {
  position: relative;
  width: 100%;
  height: 100rpx;
  background: #fff;
  display: flex;
  align-items: center;

  &:active {
    background: #f2f3f5;
  }

  i {
    margin: 0 25rpx;
    font-size: 40rpx;
  }

  span {
    font-size: 32rpx;
  }

  .arrow {
    position: absolute;
    right: 10rpx;
    font-size: 32rpx;
  }
}
</style>