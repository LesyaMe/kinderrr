<template>
  <button class="standart_btn" @click.prevent="nextQuestion(page)">Далее</button>
</template>

<script>
export default {
name: "QuizPagination",
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    nextQuestion(page) {
      if(page == this.pages) {
        this.paginate(page);
      } else {
        this.paginate(page+1);
      }
    }
  },
  mounted: {

  }
}
</script>

<style scoped>

</style>