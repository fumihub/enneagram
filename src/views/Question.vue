<template>
  <v-container class="px-6">
    <v-row align="center" justify="center">
      <div class="bg pl-12 pb-12 pr-7 py-12 mt-10">
        <v-row align="center" justify="center">
          <v-row justify="center">
            <v-col cols="12" class="ml-12 px-6 mt-12">
              <p class="px-4">{{ topic.question }}</p>
            </v-col>
            <v-col class="col-12">
              <div class="question_container pl-10">
                <v-radio-group class="" v-model="radioGroup">
                  <v-radio
                    v-for="(item, index) in topic.options"
                    :key="index"
                    :label="item.option"
                    :value="index + 1"
                    class="py-6 px-4"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-col>
            <v-col align="center" class="pb-12 col-12">
              <v-btn x-large @click="answer" :color="btnType" dark>{{
                answeredButtonLabel
              }}</v-btn>
            </v-col>
          </v-row>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  created() {
    // 問題をWebAPIから取得
    axios.get("/data/questions.json").then((response) => {
      this.questions = response.data.questions;
      if (this.questions.length) {
        this.setQuestions();
      }
    });
  },
  data() {
    return {
      topic: {},
      answered: [],
      radioGroup: 1,
      questions: [],
      answeredButtonLabel: `次の質問へ`,
      btnType: "success",
    };
  },
  methods: {
    /**
     * 回答状況を見て問題を設定する
     */
    setQuestions() {
      const questionIndex = this.answered.length;
      this.topic = this.questions[questionIndex];
      if (this.answered.length >= this.questions.length - 1) {
        // 最終問題の場合ボタンの文言と色を変更する
        this.answeredButtonLabel = `次へ進む`;
        this.btnType = "primary";
      }
    },
    /**
     * 回答する
     */
    answer() {
      // 選択したオプションを取得
      const selectOption = this.radioGroup;
      // 回答を配列に格納
      this.answered.push(selectOption);
      if (this.answered.length < this.questions.length) {
        // 次の質問を設定
        this.setQuestions();
        // 選択の初期化
        this.radioGroup = 1;
      } else {
        // 最終問題の回答で結果画面に遷移する
        this.$router.push({
          path: "/animation",
          query: { answers: this.answered },
        });
      }
    },
  },
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
  background-image: url("/image/question_background.png");
  background-size: 100% 100%;
}
</style>
