<template>
  <div class="head-wrap">
    <div class="top-content">
      <img src="./../assets/volyaBg.png" alt="">
    </div>
    <section class="listen container">
      <h1>Слушайте сказки со всего мира вместе с Пашей Волей и Kinder!</h1>
      <p>Знакомьтесь с культурой разных народов, участвуйте в викторинах, собирайте ключи и выигрывайте призы! </p>
      <div class="wrap-btn">
        <router-link tag="a" to="/" class="button button--blue">Усаживайтесь<br>поудобнее</router-link>
        <router-link tag="a" class="button button--red" to="/readtogether">Открывайте<br>книгу</router-link>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "sectionInfo"
}
</script>

<style scoped>
h1  {
  color: #DE5935;
  font-size: 26px;
  margin-bottom: 10px;
}
.listen {
  margin-bottom: 47px;
  margin-top: 50px;
  text-align: center;
}
.listen p {
  color: #00AAE8;
  font-size: 24px;
  margin-bottom: 55px;
}
.button {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  box-sizing: border-box;
}
.wrap-btn {
  display: flex;
  justify-content: space-between;
  width: 54%;
  margin: 0 auto;
}
.button--blue {
  background-image: url(./../assets/button-blue.svg);
  width: 208px;
  height: 53px;
  background-position: top;
  background-repeat: no-repeat;
  padding: 5px 10px 12px 40px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
.button--red {
  background-image: url(./../assets/button-red.svg);
  width: 208px;
  height: 53px;
  background-position: top;
  background-repeat: no-repeat;
  padding: 5px 40px 12px 10px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>