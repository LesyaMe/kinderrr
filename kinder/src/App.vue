<template>
  <div id="app">
    <sectionInfo />
    <videosSection />
  </div>
</template>

<script>
import sectionInfo from '@/components/sectionInfo'
import videosSection from '@/components/videosSection'

export default {
  name: 'App',
  components: {
    sectionInfo,
    videosSection
  }
}
</script>

<style>
@font-face {
  font-family: "Noteworthy-Bold";
  /*src: url('./../assets/fonts/Noteworthy.otf');*/
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Noteworthy, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  width: 1280px;
  margin: 0 auto;
}
.container {
  width: 78.44%;
  margin-left: auto;
  margin-right: auto;
}
div {
  -moz-box-sizing: border-box; /* Для Firefox */
  -webkit-box-sizing: border-box; /* Для Safari и Chrome */
  box-sizing: border-box; /* Для IE и Opera */
}
h2 {
  font-size: 28px;
  color: #00AAE8;
}
h3 {
  font-size: 36px;
  color: #DE5935;
}
</style>
