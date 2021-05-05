<template>
  <div>
    <van-collapse :value="activeNames" @change="onChange">
      <!-- 任务 -->
      <van-collapse-item name="1">
        <!-- 周次 -->
        <div slot="title">
          <div>
            第01周
            <div v-if="teacher">
              <van-tag type="primary" style="margin-left: 10rpx"> 标签</van-tag>
            </div>
          </div>
        </div>

        <!-- 任务 -->
        <div>
          <!-- 教师 显示发布的状态 -->
          <van-cell-group v-if="teacher">
            <van-cell title="任务01" value="已发布" />
            <van-cell title="任务02" value="已发布" />
          </van-cell-group>
          <van-cell-group v-else>
            <van-cell title="任务01" />
            <van-cell title="任务02" />
          </van-cell-group>
        </div>
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

<style lang="scss" scoped>
.discussion {
  height: 90rpx;
  border-bottom: solid 1px #f2f2f2;
  display: flex;
  align-items: center;
}
</style>