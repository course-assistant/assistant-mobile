<template>
  <div class="teacher-course-detail">
    <p>课程名</p>
  </div>
</template>

<script>

export default {

  data() {
    return {
      course_id: 0
    }
  },

  methods: {

  },

  onLoad(option) {
    this.course_id = option.course_id;
  }

}
</script>


<style lang="scss" scoped>
.teacher-course-detail {
}
</style>
