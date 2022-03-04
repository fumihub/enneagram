<template>
  <section class="home-section">
    <v-container class="home-container">
      <v-row>
        <v-col align="center" justify="center">
          <v-row class="enneagram-explain text-center">
            <v-col class="my-3">
              <h1 class="display-1 font-weight-bold my-3">
                {{ title }}
              </h1>
              <p
                class="detail-text text-start font-weight-regular ml-15"
                v-html="htmlText(explain)"
              ></p>
              <p
                class="invitation-text text-start font-weight-regular ml-15"
                v-html="htmlText(startText)"
              ></p>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col class="mb-4">
              <v-btn
                text
                height="150"
                width="200"
                class="start-btn"
                to="/question"
              >
                <h1 class="font-weight-bold">診断開始</h1>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
  data() {
    return {
      title: "エニアグラム診断",
      explain: `エニアグラム診断とは、人間が生まれ持った気質を9つのタイプに分類したもので、
                それぞれのタイプの特徴、陥りやすいパターン、その対処法などがわかります。
                自己成長の地図と言われ、自分のタイプの気質の輝きを知り、
                そこを伸ばすことで成功や幸せを掴むことを目的とします。`,
      startText: `エニアグラム診断で、あなたの心(宝箱)を開き、
                  あなたの本当の性格(宝)を見つけよう！！！`,
    };
  },
  methods: {
    htmlText(msg) {
      if (msg !== "") {
        return msg.replace(/\r?\n/g, "<br>");
      }
    },
  },
};
</script>

<style lang="scss">
.enneagram-explain {
  background: url("../assets/paper.png");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 3px 0 3px 0;
  max-width: 700px;
  min-height: 400px;
  width: 100%;
}

.start-btn {
  background: url("../assets/closedBox.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
