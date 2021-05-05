<template>
  <div class="user-course-discussions">
    <DiscussionItem
      v-for="(item, index) in discussions"
      :key="index"
      :discussion="item"
    />
  </div>
</template>

<script>
import DiscussionItem from '@/components/DiscussionItem.vue';

export default {
  data() {
    return {
      discussions: [
        {
          discussion_id: 0,
          discussion_title: '关于小程序',

          discussion_content: '我觉得话可以22sss2',
          discussion_date: '2021-2-3',

          teacher_avatar: 'https://tanyiqu.oss-cn-hangzhou.aliyuncs.com/assistant/img/avatar/avatar_teacher_female.jpg',
          teacher_name: '张妍琰',
        },],
    }
  },

  props: ['course_id'],

  components: { DiscussionItem },

  methods: {
    // 刷新讨论
    async refresh() {
      console.log('course_id ' + this.course_id);
      let [data, err] = await this.$awaitWrap(this.$get('discussioncomment/selectbycourse', {
        id: this.course_id
      }));
      if (err) {
        this.$toast('加载课堂讨论异常：' + err);
        return;
      }
      this.discussions = data.data;
      console.log(data);
    },
  },
}
</script>

<style lang="scss" scoped>
.user-course-discussions {
  width: 100%;
}
</style>