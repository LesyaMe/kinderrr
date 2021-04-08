<template>
  <main>
    <section class="victorina_header">
      <div class="container">
        <h2>Викторина</h2>
        <ul class="steps">
          <li class="steps_item step__item1">Правильно ответьте на все вопросы выпуска, получите 1/4 ключа и участвуйте в еженедельном розыгрыше</li>
          <li class="steps_item step__item2">Соберите целый золотой ключ</li>
          <li class="steps_item step__item3">Участвуйте в главном розыгрыше и выигрывайте призы</li>
        </ul>
      </div>
    </section>
    <section class="victorina_release1">
      <div class="container">
        <h3>Викторина по выпуску № 1
          Cказки о принятии себя</h3>
        <button class="standart_btn">Начать</button>
        <h4>Все викторины</h4>
        <div class="quiz_list">
          <div class="quiz_item">
            <div class="quiz_item-preview"></div>
            <p>Викторина по выпуску сказок “Сказки о принятии себя, своих сильных и слабых сторон”</p>
          </div>
          <div class="quiz_item">
            <div class="quiz_item-preview"></div>
            <p>Викторина по выпуску сказок “Сказки о близких, семье и друзьях”</p>
          </div>
          <div class="quiz_item">
            <div class="quiz_item-preview"></div>
            <p>Викторина по выпуску сказок “Сказки о том, как разбираться в людях и в своих потребностях и желаниях”</p>
          </div>
          <div class="quiz_item">
            <div class="quiz_item-preview"></div>
            <p>Викторина по выпуску сказок “Сказки о том, как справляться с трудностями”</p>
          </div>
        </div>
      </div>
    </section>
    <section class="activeQuiz">
      <div class="container">
        <h3>Выпуск № 1 Сказки о принятии себя, своих сильных и слабых сторон </h3>
        <form action="">
          <div class="question_wrap" v-for="(question, index) in questionsL" :key="index">
            <span class="activeQuiz_question_page">{{index + page }}/{{questions.length}}</span>
            <div class="activeQuiz_question">{{question.title}}</div>
            <div class="question_form">
              <div class="check-wrap" v-for="(questionOption, index) in question.questionOptions" :key="index">
                <input type="radio" :id="questionOption.id" class="checkbox" :name="question.name" v-model="questionOption.isChecked">
                <label :for="questionOption.id" class="checkbox-text"><p>{{questionOption.text}}</p></label>
              </div>
            </div>
          </div>
          <Pagination v-model="page" :count="countQuestions" :per-page="questionInPage" v-if="page !== questions.length"/>
          <button class="standart_btn" type="submit" v-if="page === questions.length">Готово</button>
        </form>


<!--        <button class="standart_btn">Далее</button>-->

      </div>
    </section>
    <section class="victorina_winners">
      <div class="container">
        <h4>Победители викторины</h4>
        <p>Поздравляем победителей недели!</p>
        <select name="" id="">
          <option value="" selected>Викторина по выпуску № 1 “Cказки о принятии себя”</option>
          <option value="" selected>Викторина по выпуску № 2 “Cказки о принятии себя”</option>
          <option value="" selected>Викторина по выпуску № 3 “Cказки о принятии себя”</option>
        </select>
        <div class="winners_wrap">
          <table width="100%">
            <tr>
              <th>#</th><th>Победитель</th><th>Приз</th>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
            <tr>
              <td>1</td><td>Алексей Молодцов Алексеевич</td><td class="winner_prize">Набор для творчества</td>
            </tr>
          </table>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import Pagination from '@/components/QuizPagination'
export default {
  name: "Quiz",
  components: {
    Pagination,
  },
  data() {
    return {
      pagePath: this.$route.path,
      questions: [
        {title: 'Как черепахе из сказки «Черепаха и Каипора» удалось выиграть у Каипоры соревнование?',
        name: 'question1',
          questionOptions: [
            {text: 'Она долго тренировалась', isChecked: false, id: 'question1var1' },
            {text: 'Она позвала на помощь других животных', isChecked: false, id: 'question1var2'},
            {text: 'Она перехитрила Каипору', isChecked: false, id: 'question1var3'},
            {text: 'Она заставила судью присудить ей победу', isChecked: false, id: 'question1var4'},
          ],
          },
        {title: 'Второй вопрос',
          name: 'question2',
          questionOptions: [
            {text: 'Она долго тренировалась', isChecked: false, id: 'question2var1' },
            {text: 'Она позвала на помощь других животных', isChecked: false, id: 'question2var2'},
            {text: 'Она перехитрила Каипору', isChecked: false, id: 'question2var3'},
            {text: 'Еще вариант', isChecked: false, id: 'question2var4'},
          ],
        },
        {title: 'Третий вопрос',
          name: 'question3',
          questionOptions: [
            {text: 'Она долго тренировалась', isChecked: false, id: 'question3var1' },
            {text: 'Она позвала на помощь других животных', isChecked: false, id: 'question3var2'},
            {text: 'Она перехитрила Каипору', isChecked: false, id: 'question3var3'},
            {text: 'Она заставила судью присудить ей победу', isChecked: false, id: 'question3var4'},
          ],
        },
      ],
      questionInPage: 1,
      page: 1,
    };
  },
  mounted() {
    this.$emit('update:page', this.pagePath);
  },
  computed: {
    questionsL () {
      const offset = (this.page - 1) * this.questionInPage;
      return this.questions.slice(offset, offset + this.questionInPage);
    },
    countQuestions() {
      return this.questions.length;
    }
  }
}
</script>

<style scoped>
.container {
  width: 78.44%;
  margin: 0 auto;
  text-align: center;
}
.victorina_header {
  padding: 0 0 155px;


  text-align: center;
}
.victorina_header h2 {
  margin-bottom: 50px;
  margin-top: 3em;
}
select {
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--accent-text-color);
  border: none;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
}
.steps {
  background: url("./../assets/quizBg.png") no-repeat center;
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
  cursor: pointer;
}
.victorina_release1 {
  position: relative;
  text-align: center;
  background: url(./../assets/quizWave.svg) no-repeat;
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
  background: url(./../assets/journal.svg) no-repeat;
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

.quiz_list {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.quiz_item {
  width: 21%;
}
.quiz_item-preview {
  width: 100%;
  height: 210px;
  border: 5px solid #fff;
  background-color: var(--headers-color);
  opacity: 0.5;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
}
.quiz_item-preview . active {
  opacity: 1;
}
.quiz_item p {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: var(--black-text-color);
  text-align: left;
}
.activeQuiz h3 {
  max-width: 73%;
  margin: 1em auto 67px;
}
.activeQuiz_question_page {
  font-size: 26px;
  color: var(--accent-text-color);
  margin-bottom: 22px;
}
.activeQuiz_question {
  font-size: 26px;
  color: var(--accent-text-color);
  margin-bottom: 62px;
}
.question_form {
  width: max-content;
  margin: 0 auto 78px;
}
.checkbox {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
}
.checkbox-text {
  display: flex;
  margin-bottom: 35px;
  align-items: center;
}

.checkbox:checked ~ .checkbox-text::before {
  background-image: url(./../assets/quizCheckOn.svg);
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin-right: 26px;
}
.checkbox-text::before {
  margin-right: 10px;
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  background-image: url(./../assets/quizCheckOff.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 26px;
}
.winners_wrap {

}
table {
  font-family: 'Noto Sans', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: var(--black-text-color);
  width: 80%;
  margin: 0 auto;
  border-spacing: 2px 5px;
}
tr {
  border-bottom: 1px solid rgba(240,67,33,1);
  height: 55px;

}
th {
  font-weight: bold;
  font-size: 23px;

}
.winner_prize {
  font-weight: bold;
  color: var(--headers-color);
}
</style>