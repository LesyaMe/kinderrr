<template>
  <div id="app">
    <Header />
     <div id="nav" v-if="currentPage != '/'" :class="{ 'volyas_block': this.currentPage === '/volyasfairytales'}">
        <router-link to="/volyasfairytales">Сказки от Павла Воли</router-link>
        <router-link to="/quiz">Викторина</router-link>
        <router-link to="/readtogether">Читаем вместе</router-link>
        <router-link to="/advices">Советы родителям</router-link>
        <router-link to="/">Победители</router-link>
     </div>
    <transition name="fade">
      <router-view :page.sync="currentPage"/>
    </transition>
    <Footer v-if="currentPage != '/'" />
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    console.log(this.currentPage);
  },
  data() {
    return {
      currentPage: '',
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@font-face {
  font-family: "Noteworthy-Bold";
}
:root {
  --headers-color: #DE5935;
  --btn-color: #00AAE8;
  --accent-text-color: #00AAE8;
  --text-color: #424242;
  --black-text-color: #000000;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Noteworthy, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
}
.container {
  width: 78.44%;
  margin: 0 auto;
}
div {
  -moz-box-sizing: border-box; /* Для Firefox */
  -webkit-box-sizing: border-box; /* Для Safari и Chrome */
  box-sizing: border-box; /* Для IE и Opera */
}
h2 {
  color: var(--headers-color);
  font-weight: bold;
  font-size: 52px;
  line-height: 24px;
}

h3 {
  color: var(--headers-color);
  font-weight: bold;
  font-size: 36px;
}
h4 {
  color: var(--headers-color);
  font-weight: bold;
  font-size: 24px;
}
#nav {
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  width: 60%;
  margin-left: auto;
  justify-content: space-around;
  position: absolute;
  right: 25px;
  top: 0;
  margin-top: 50px;
}

#nav a {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-decoration: none;
  padding: 24px 0;
  color: var(--accent-text-color);
}
#nav.volyas_block>a {
  color: #fff;
}

#nav a.router-link-exact-active {
 position: relative;
}
#nav a.router-link-exact-active:after {
  content: '';
  position: absolute;
  background: url(assets/activeNavBorder.svg) no-repeat;
  background-size: cover;
  bottom: 20%;
  left: 50%;
  height: 8px;
  transform: translate(-50%, -50%);
  width: 100%;
}
#nav.volyas_block>a.router-link-exact-active:after {
  background: none;
}

@media screen and (max-width: 1024px){
  h2 {
    line-height: 49px;
  }
}
</style>
