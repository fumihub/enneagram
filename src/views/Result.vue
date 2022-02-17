<template>
  <v-container class="px-6">
    <v-row align="center" justify="center">
      <div class="bg ml-10 pl-12 pb-12 pr-7 py-12 mt-10">
        {{/* 動作確認のためのテストコード questionページからデータが受け渡せていることを確認 */}}
        <p>回答結果一覧</p>
        <div v-if="questions.length">
          <v-row v-for="(item, index) in answers" :key="index">
            <v-col class="pl-6 col-6">
              <p>{{ questions[index].question }}</p>
            </v-col>
            <v-col class="pl-6 col-6">
              <p>{{ questions[index].options[item - 1].option }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" class="pb-12 col-12">
              <v-btn x-large @click="answer" color="success" to="/" dark
                >タイトルへ</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  created() {
    // queryStringsから受け取った値をdataへ
    this.answers = this.$route.query.answers;
    // 問題をWebAPIから取得
    axios.get("/enneagram/data/questions.json").then((response) => {
      this.questions = response.data.questions;
    });
  },
  mounted() {},
  data() {
    return {
      questions: [],
      answers: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}
.bg {
  max-width: 700px;
  min-height: 400px;
  width: 100%;
  background-image: url("/enneagram/image/question_background.png");
  background-size: 100% 100%;
}
</style>
