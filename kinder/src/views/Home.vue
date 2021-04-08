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
      <!--<img src="../assets/mainBannerBg.png" alt="">-->
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
  padding-top: 48px;
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
  padding: 0 0 0 6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/*.banner .left-content:after {
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
}*/
.banner .right-content {
  width: 62.5vw;
  height: 94.5vh;
  background: url("./../assets/mainBannerBg.png") no-repeat;
  background-size: cover;
  background-position: left;
}
.banner .right-content img{
  width: 100%;
  height: 99%;
  object-fit: cover;
  object-position: left
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
@media screen and (max-width: 1024px) {
  .nav-list {
    width: 68%;
  }
  .banner h1 {
    font-size: 50px;
    line-height: 60px;
    margin-top: 1em;
  }
  .banner .left-content:after {
    top: -47%;

  }
}
@media screen and (max-width: 770px) {
 .banner {
   flex-direction: column-reverse;
 }
  .banner .right-content {
    width: 100%;
  }
  .banner .left-content {
    width: 100%;
  }
  .banner .left-content:after {
    display: none;
  }
  .banner .left-content:before {
    content: '';
    position: absolute;
    background-image: url("./../assets/bannerTabWave.svg");
    top: -37%;
    left: 0;
    right: 0;
    height: 130px;
  }
}
@media screen and (max-width: 450px) {
  .banner .left-content:before {
    top: -29%;
  }
  .banner h1[data-v-fae5bece] {
    font-size: 42px;
  }


}
@media screen and (max-width: 376px) {
  .banner .left-content:before {
    top: -26%;
  }
}
</style>