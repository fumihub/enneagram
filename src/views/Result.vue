<template>
  <v-container>
    <v-row class="mt-10">
      <v-col align="center" justify="center" cols="12">
        <v-row align="center" justify="center">
          <h1 class="display-1 font-weight-bold ma-5">あなたのタイプは</h1>
        </v-row>
        <v-card class="result">
          <v-row align="center" justify="center">
            <v-col class="col-12 col-sm-6">
              <v-img
                class="ma-3"
                v-bind:src="type.src"
                v-bind:lazy-src="type.src"
              />
            </v-col>
            <v-col class="col-12 col-sm-6">
              <v-img
                class="ma-3"
                v-bind:src="type.graph"
                v-bind:lazy-src="type.graph"
              />
            </v-col>
          </v-row>
          <h2 class="pa-3 text-left" v-html="type.type"></h2>
          <p class="pa-3 text-left" v-html="type.text"></p>
        </v-card>
        <v-row>
          <v-col align="center" class="pb-12 col-12">
            <v-btn x-large color="success" to="/" dark class="ma-3">
              タイトルへ
            </v-btn>
            <v-btn x-large color="primary" to="/typeExplain" dark class="ma-3">
              9タイプ確認
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  created() {
    // queryStringsから受け取った値をdataへ
    this.answers = this.$route.query.answers;
    const promises = [
      // リレーションをWebAPIから取得
      axios.get("/enneagram/data/relations.json"),
      // タイプをWebAPIから取得
      axios.get("/enneagram/data/types.json"),
    ];
    // リレーショナルとタイプ両方を取得してから実行
    Promise.all(promises).then(([relations, types]) => {
      this.relations = relations.data.relations;
      this.types = types.data.types;
      if (this.relations.length && this.types.length) {
        this.selectRelation();
        this.selectType();
      }
    });
  },
  mounted() {},
  data() {
    return {
      answers: [],
      relations: [],
      types: [],
      relation: {},
      type: {},
    };
  },
  methods: {
    selectRelation() {
      // 回答からリレーション選択
      this.relation = this.relations.find((data) => {
        return (
          data.no1 == this.answers[0] &&
          data.no2 == this.answers[1] &&
          data.no3 == this.answers[2]
        );
      });
    },
    selectType() {
      // リレーションからタイプ選択
      this.type = this.types.find((data) => {
        return data.no === this.relation.type;
      });
    },
  },
};
</script>

<style scoped>
.result {
  max-width: 700px;
  min-height: 400px;
  width: 100%;
  background-image: url("/enneagram/image/treasure.png");
  background-size: 100% 100%;
  opacity: 0;
  animation: fadeIn 2s ease 1s 1 forwards;
}

@keyframes fadeIn {
  0% {
    /*アニメーション開始時は不透明度0%*/
    opacity: 0;
    transform: scale(0);
  }
  50% {
    /*アニメーション半分進んだ時点で不透明度100%*/
    opacity: 1;
    transform: scale(1.25);
  }
  100% {
    /*アニメーション終了時は不透明度100%*/
    opacity: 1;
    transform: scale(1);
  }
}
</style>
