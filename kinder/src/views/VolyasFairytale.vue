<template>
  <main>
    <sectionInfo />
    <videosSection />
  </main>
</template>

<script>
import sectionInfo from '@/components/sectionInfo'
import videosSection from '@/components/videosSection'
export default {
name: "VolyasFairytale",
  components: {
    sectionInfo,
    videosSection
  },
  data() {
    return {
      pagePath: this.$route.path,
    };
  },
  mounted() {
    this.$emit('update:page', this.pagePath);
  },
}
</script>

<style scoped>

.victorina_header {
  padding: 50px 0 155px;

  text-align: center;
}
.victorina_header h2 {
  margin-bottom: 50px;
}
.steps {
  background: url("../assets/quizBg.png") no-repeat center;
  background-size: contain;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 60px 0;
  width: 90%;
  margin: 0 auto;
}
.steps_item {
  list-style-type: none;
  max-width: 252px;
  text-align: left;
  color: var(--headers-color);
  display: flex;
}
.step__item1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-left: 2em;
}
.step__item2 {
  grid-column-start: 6;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 3;
  align-items: center;
  margin-left: 2em;
}
.step__item3 {
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 3;
  grid-row-end: 4;
  align-items: baseline;
  margin-left: 6em;

}
.standart_btn {
  padding: 15px 79px;
  background-color: var(--btn-color);
  color: #fff;
  border: none;
  border-radius: 136.899px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
}
.victorina_release1 {
  position: relative;
  text-align: center;
  background: url(../assets/quizWave.svg) no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 6em 0;

}
.victorina_release1 .container {
  position: relative;
}
.victorina_release1 .container:after {
  content: '';
  position: absolute;
  width: 146px;
  height: 146px;
  background: url(../assets/journal.svg) no-repeat;
  background-size: contain;
  top: 14%;
  right: 0;
}
.victorina_release1 h3 {
  margin: 1em auto 67px;
  position: relative;
  max-width: 55%;
}
.victorina_release1 h3:before {
  content: '';
  position: absolute;
  width: 90px;
  height: 90px;
  background: url(./../assets/Star_big1.png) no-repeat;
  background-size: contain;
  bottom: -62%;
  left: -29%;
}
.victorina_release1:after {
  content: '';
  position: absolute;
  background: url(./../assets/key_01.png) no-repeat;
  background-size: contain;
  top:7%;
  left:50%;
  transform:translate(-50%, -50%);
  height: 20em;
  width: 23em;
}
.victorina_release1 .standart_btn {
  margin-bottom: 45px;
}
.victorina_release1 h4 {
  position: relative;
}
.victorina_release1 h4:after {
  content: '';
  position: absolute;
  background: url(./../assets/heart.svg) no-repeat;
  background-size: contain;
  bottom: 37%;
  left: 23%;
  height: 40px;
  width: 40px;
}

</style>