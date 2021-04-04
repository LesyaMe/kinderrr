<template>
  <button class="standart_btn" @click="nextQuestion()">Далее</button>
</template>

<script>
export default {
name: "QuizPagination",
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  mounted: {
    nextQuestion(page) {
      return page++;
    }
  }
}
</script>

<style scoped>

</style>