<template>
  <header>
    <a href="/" class="header_logo"><img src="./../assets/logo.svg" alt=""></a>
    <nav>
      <ul class="nav-list">
        <li><a href="">Наша миссия</a></li>
        <li><a href="">Продукты</a></li>
        <li><a href="">Качество ингредиентов</a></li>
        <li><a href="">Инициативы</a></li>
        <li><a href="">Детский взгляд</a></li>
        <li><a href="">Акции</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
header {
  background-color: #F14322;
  padding-right: 35px;
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.header_logo {
  position: absolute;
  height: 153px;
  width: 180px;
  top: 1vh;
  left: 11vw;
}
.header_logo img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
}
.nav-list li{
  list-style-type: none;
  padding: 13px;
}
.nav-list a{
  color: #fff;
  text-decoration: none;
}
@media screen and (max-width: 770px) {
  .nav-list a {
    display: none;
  }
  .header_logo[data-v-29e8c3c6] {
    left: 0vw;
  }
}
@media screen and (max-width: 450px) {
  .header_logo {
    height: 75px;
    width: 86px;
    top: 1vh;
    left: 2vw;
  }
  .nav-list {
    width: 75%;
    margin-left: auto;
    font-size: 6px;
  }

}
</style>