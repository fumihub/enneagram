<template>
  <section class="home-section">
    <v-container class="home-container">
      <v-row class="enneagram-explain text-center">
        <v-col class="my-3">
          <h1 class="display-1 font-weight-bold my-3">
            エニアグラム診断
          </h1>
          <p class="detail-text font-weight-regular">
            エニアグラム診断とは、(説明)
          </p>
          <p class="invitation-text font-weight-regular">
            エニアグラム診断で、あなたの心(宝箱)を開き、<br>あなたの本当の性格(宝)を見つけよう！！！
          </p>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col class="mb-4">
          <v-btn
            text
            height="150"
            width="200"
            class="start-btn"
            to="/question">
            <h1 class="font-weight-bold">診断開始</h1>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style  lang="scss" scoped>
.enneagram-explain {
  background: url("../assets/paper.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 3px 0 3px 0;
  width: 100%;
  height: 100%;
}

.start-btn{
  background: url("../assets/closedBox.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  name: "HomeSection",

  data: () => ({
    
  }),
};
</script>
