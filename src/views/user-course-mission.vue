<template>
  <div>
    <van-collapse :value="activeNames" @change="onChange">
      <van-collapse-item name="1">
        <div slot="title">
          第01周
          <div v-if="teacher">
            <van-tag type="primary" style="margin-left: 10rpx"> 标签</van-tag>
          </div>
        </div>
        <div>内容内容</div>
      </van-collapse-item>

      <van-collapse-item name="2">
        <div slot="title">
          第02周
          <div v-if="teacher">
            <van-tag type="primary" style="margin-left: 10rpx"> 标签</van-tag>
          </div>
        </div>
        <div>内容内容</div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [],
    }
  },

  props: ['course_id', 'teacher'],

  methods: {
    async refresh() {
      console.log('refresh lesson ' + this.course_id);
    },


    onChange(event) {
      this.activeNames = event.mp.detail;
    }
  }
}
</script>

<style>
</style>