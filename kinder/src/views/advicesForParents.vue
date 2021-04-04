<template>
  <main class="advice_to_parents">
    <h2 class="container">
      Советы родителям
    </h2>
    <div class="advice_list">
      <div class="advice_item">
        <div class="container">
          <div class="advice_item_preview">
            <div class="ellipse"><img src="./../assets/KINDER-1.png" alt=""></div>
            <div class="advice_expert">
              <p>Игровой терапевт</p>
              <p>Александр Покрышкин</p>
            </div>
          </div>
          <div class="advice_info">
            <h3>Как играть и учиться одновременно?</h3>
            <div class="advice_info_text">
              Правда ли, что игры могут помочь в обучении? 🧐<br>
              Еще как могут! Психолог и игровой терапевт Александр Покрышкин делится идеями, как игры в приложении Applaydu могут помочь ребенку получить знания об окружающем мире.
            </div>
            <button class="button button--blue-right">
              Смотреть
            </button>

          </div>
        </div>
      </div>
      <div class="advice_item">
        <div class="container">
          <div class="advice_item_preview">
            <div class="ellipse"><img src="./../assets/KINDER-5.png" alt=""></div>
            <div class="advice_expert">
              <p>Специалист по эмоциональному интеллекту</p>
              <p>Виктория Шиманская</p>
            </div>
          </div>
          <div class="advice_info">
            <h3>Как играть и учиться одновременно?</h3>
            <div class="advice_info_text">
              Правда ли, что игры могут помочь в обучении? 🧐<br>
              Еще как могут! Психолог и игровой терапевт Александр Покрышкин делится идеями, как игры в приложении Applaydu могут помочь ребенку получить знания об окружающем мире.
            </div>
            <button class="button button--blue-right">
              Смотреть
            </button>

          </div>
        </div>
      </div>
      <div class="advice_item">
        <div class="container">
          <div class="advice_item_preview">
            <div class="ellipse"><img src="./../assets/KINDER-1.png" alt=""></div>
            <div class="advice_expert">
              <p>Игровой терапевт</p>
              <p>Александр Покрышкин</p>
            </div>
          </div>
          <div class="advice_info">
            <h3>Как играть и учиться одновременно?</h3>
            <div class="advice_info_text">
              Правда ли, что игры могут помочь в обучении? 🧐<br>
              Еще как могут! Психолог и игровой терапевт Александр Покрышкин делится идеями, как игры в приложении Applaydu могут помочь ребенку получить знания об окружающем мире.
            </div>
            <button class="button button--blue-right">
              Смотреть
            </button>

          </div>
        </div>
      </div>
      <div class="advice_item">
        <div class="container">
          <div class="advice_item_preview">
            <div class="ellipse"><img src="./../assets/KINDER-5.png" alt=""></div>
            <div class="advice_expert">
              <p>Специалист по эмоциональному интеллекту</p>
              <p>Виктория Шиманская</p>
            </div>
          </div>
          <div class="advice_info">
            <h3>Как играть и учиться одновременно?</h3>
            <div class="advice_info_text">
              Правда ли, что игры могут помочь в обучении? 🧐<br>
              Еще как могут! Психолог и игровой терапевт Александр Покрышкин делится идеями, как игры в приложении Applaydu могут помочь ребенку получить знания об окружающем мире.
            </div>
            <button class="button button--blue-right">
              Смотреть
            </button>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
name: "advicesForParents",
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
/*.container {
  width: 78.44%;
  margin: 0 auto;
}*/
.advice_to_parents h2 {
  position: relative;
  margin-top: 15vh;
  margin-bottom: 1em;
  text-align: center;
}
.advice_item {
  margin-bottom: 3em;
}
.advice_item:nth-child(even) {
  background: url(./../assets/advice_itemBg.png) no-repeat;
  background-size: 100% 100%;
  background-position: bottom;
}
.advice_item .container {
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
}
.advice_item_preview {
  position: relative;
  width: 46%;
}
/*.advice_item:nth-child(even)> .advice_info.advice_info_text {
    color: #fff;
}*/

.ellipse {
  width: 100%;
  height: inherit;
  background: rgba(196,196,196,1);
  -moz-border-radius: 287px / 218px;
  -webkit-border-radius: 287px / 218px;
  border-radius: 287px / 218px;
  overflow: hidden;
  position: relative;
}
.ellipse img {
  object-fit: contain;
  object-position: top center;
  width: 100%;
}
.advice_expert {
  background-color: var(--headers-color);
  color: #fff;
  -moz-border-radius: 178px / 96px;
  -webkit-border-radius: 178px / 96px;
  border-radius: 178px / 96px;
  position: absolute;
  box-sizing: border-box;
  padding: 35px 10px;
  bottom: -27%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  text-align: center;
}
.advice_expert>p:nth-child(1)  {
  font-size: 28px;
}
.advice_expert>p:nth-child(2) {
  font-size: 18px;
}
.advice_info {
  text-align: left;
  width: 46%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.advice_info h3 {
  color: var(--accent-text-color);
  line-height: 40px;
  margin-bottom: 40px;
  position: relative;
}
.button--blue-right {
  background-image: url(./../assets/blueButtonRight.svg);
  width: 208px;
  height: 53px;
  background-position: top;
  background-repeat: no-repeat;
  padding: 10px 54px 12px 40px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(255,255,255,0);
  border: none;
  cursor: pointer;
}
.advice_info_text {
  font-family: 'Noto Sans', sans-serif;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 36px;
}
.advice_info>.button--blue-right {
  color: #fff;
  font-family: Noteworthy, Helvetica, Arial, sans-serif;
}

.advice_item:nth-child(even)>.container {
  flex-direction: row-reverse;
  color: #fff;
  position: relative;
}
.advice_item:nth-child(even)>.container:after {
  content: '';
  position: absolute;
  background: url(./../assets/Star_big1.png) no-repeat;
  background-size: contain;
  bottom: -7%;
  left: 32%;
  height: 90px;
  width: 90px;
  transform: translate(-50%, -50%);
}
.advice_item:nth-child(odd)>.container:after {
  content: '';
  position: absolute;
  background: url(./../assets/journal.svg) no-repeat;
  background-size: contain;
  bottom: -35%;
  left: 50%;
  height: 100px;
  width: 100px;
  transform: translate(-50%, -50%);
}
.advice_item:nth-child(even)>.container> .advice_info {
  margin-top: 6%;
}
.advice_item:nth-child(even)>.container> .advice_item_preview {
  margin-bottom: 20%;
}
.advice_item:nth-child(even)>.container> .advice_item_preview:before {
  content: '';
  position: absolute;
  background: url(./../assets/bird.svg) no-repeat;
  background-size: contain;
  bottom: -54%;
  left: 0;
  height: 130px;
  width: 117px;
  transform: translate(-50%, -50%);
}
.advice_item:nth-child(even)>.container> .advice_item_preview:after {
  content: '';
  position: absolute;
  background: url(./../assets/star_white.svg) no-repeat;
  background-size: contain;
  bottom: 0;
  right: 0;
  height: 62px;
  width: 62px;
}
.advice_item:nth-child(even)>.container> .advice_info h3{
  color: #fff;
}
.advice_item:nth-child(even)>.container> .advice_info .advice_info_text{
  color: #fff;
}
.advice_item:nth-child(even)>.container>.advice_info>.button--blue-right {
  background-image: url(./../assets/redButtonRight.svg);
}
.advice_item:nth-child(odd)>.container> .advice_info h3:after {
  content: '';
  position: absolute;
  background: url(./../assets/heart.svg) no-repeat;
  background-size: contain;
  top: 20%;
  right: 0;
  height: 30px;
  width: 41px;
}
</style>