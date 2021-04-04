<template>
  <div class="modal-buttons">
    <div class="btn-left" @click="nextBook(page)"><img src="./../assets/modalBtnLeft.svg" alt=""></div>
    <div class="btn-right" @click="prevBook(page)"><img src="./../assets/modalBtnRight.svg" alt=""></div>
  </div>
</template>

<script>
export default {
name: "FairytalePagination",
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
    nextBook(page) {
      if(page == this.pages) {
        this.paginate(page);
      } else {
        this.paginate(page+1);
      }
    },
    prevBook(page) {
      if(page == this.pages) {
        this.paginate(page);
      } else {
        this.paginate(page-1);
      }
    }
  }
}
</script>

<style scoped>
.modal-buttons {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 110%;
  left: -5%;
  transform: translate(0, -50%);
}
.btn-left,
.btn-right {
  height: 66px;
  width: 73px;
  cursor: pointer;
}
.btn-left img,
.btn-right img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>