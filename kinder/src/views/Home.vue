<template>
  <main class="banner">
    <div class="left-content">
      <h1>Путешествуйте по миру сказок вместе с Kinder®!</h1>
      <p>Слушайте сказки народов мира, отвечайте на вопросы викторины
        и участвуйте в розыгрыше призов от Kinder®</p>
<!--      <button class="banner-btn">Узнать больше</button>-->
      <router-link tag="button" class="banner-btn" to="/volyasfairytales">Узнать больше</router-link>

    </div>
    <div class="right-content">
      <img src="./../assets/mainBannerImg.png" alt="">
    </div>
    <router-view/>
  </main>

</template>

<script>
/*import sectionInfo from '@/components/sectionInfo'
import videosSection from '@/components/videosSection'*/

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      pagePath: this.$route.path,
    }
  },
  mounted() {
    this.$emit('update:page', this.pagePath);
  },
}
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
}
.banner h1 {
  font-size: 72px;
  line-height: 70px;
  color: var(--black-text-color);
  display: flex;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
}
.banner p {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 34px;
  width: 59%;

}
.banner .left-content {
  position: relative;
  width: 45.5%;
  padding: 0 0 0 11vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner .left-content:after {
  content: '';
  position: absolute;
  bottom: 0;
  top: 0;
  right: -9vw;
  width: 9.1vw;
  background: no-repeat url(./../assets/bannerWave.svg);
  pointer-events: none;
  z-index: 1;
  background-size: cover;
}
.banner .right-content {
  width: 62.5vw;
}
.banner .right-content img{
  width: 100%;
  height: 99%;
  object-fit: contain;
}
.banner-btn {
  background-image: url(./../assets/bannerButton.svg);
  width: 208px;
  height: 53px;
  padding: 10px 40px 10px 10px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(255,255,255,0);
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  font-family: inherit;
}
</style>