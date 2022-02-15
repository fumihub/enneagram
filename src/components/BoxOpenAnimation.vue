<template>
  <section class="animation-section">
    <v-container class="animation-container">
      <v-row justify="center" align="center">
        <v-col justify="center" align="center">
          <div class="bg">
            <v-row>
              <v-col cols="12">
                <v-row class="key-area">
                  <v-col
                    v-for="(key, i) of keys"
                    :key="i"
                    :class="key"
                    class="col-4"
                  >
                    <v-img
                      :src="require('../assets/key.png')"
                      :lazy-src="require('../assets/key.png')"
                      class=""
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div class="box">
              <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col class="col-12 my-3 animation-area">
                      <v-img
                        :src="require('../assets/closedBox.png')"
                        :lazy-src="require('../assets/closedBox.png')"
                        class="fade-out"
                      />
                      <v-img
                        :src="require('../assets/openedBox.png')"
                        :lazy-src="require('../assets/openedBox.png')"
                        class="fade-in"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
            <div class="btn">
              <v-row justify="center">
                <v-col>
                  <v-overlay :z-index="zIndex" :value="overlay">
                    <v-btn class="white--text" color="success" @click="result">
                      <h1 class="font-weight-bold">診断結果へ</h1>
                    </v-btn>
                  </v-overlay>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.visible {
  opacity: 1;
}

.invisible {
  opacity: 0;
}

.bg {
  max-width: 700px;

  .key {
    position: relative;
    z-index: 1;
  }

  .box {
    position: relative;
    z-index: 2;
  }

  .btn {
    position: relative;
    z-index: 3;
  }
}

.key-area {
  & .key_1 {
    opacity: 0;
    animation: slideIn 1.5s ease 2s 1 normal;
  }
  & .key_2 {
    opacity: 0;
    animation: slideIn 1.5s ease 3.5s 1 normal;
  }
  & .key_3 {
    opacity: 0;
    animation: slideIn 1.5s ease 5s 1 normal;
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(64px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animation-area {
  position: relative;

  & .fade-out {
    position: absolute;
    z-index: 1;
    opacity: 1;
    animation: fadeOut 2s ease 6s 1 normal;
  }

  & .fade-in {
    position: absolute;
    z-index: 2;
    opacity: 0;
    animation: fadeIn 2s ease 6s 1 normal;
  }
}

@keyframes fadeOut {
  0% {
    /*アニメーション開始時は不透明度100%*/
    opacity: 1;
    transform: scale(1);
  }
  50% {
    /*アニメーション半分進んだ時点で不透明度0%*/
    opacity: 0;
  }
  100% {
    /*アニメーション終了時は不透明度0%*/
    opacity: 0;
    transform: scale(0);
  }
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
  }
  100% {
    /*アニメーション終了時は不透明度100%*/
    opacity: 1;
    transform: scale(1);
  }
}
</style>

<script>
export default {
  name: "AnimationSection",
  data() {
    return {
      overlay: this.overlay,
      zIndex: 0,
      keys: ["key_1", "key_2", "key_3"],
      questions: [],
      answers: [],
    };
  },
  created() {
    // queryStringsから受け取った値をdataへ
    this.answers = this.$route.query.answers;
  },
  mounted() {
    this.overlay = false;
    // overlayを関数の中で変更するために、thisを格納
    const _that = this;
    const key1 = document.querySelector(".key_1");
    opacityChange(key1, 1);
    const key2 = document.querySelector(".key_2");
    opacityChange(key2, 1);
    const key3 = document.querySelector(".key_3");
    opacityChange(key3, 1);
    const fadeOut = document.querySelector(".fade-out");
    opacityChange(fadeOut, 0);
    const fadeIn = document.querySelector(".fade-in");
    opacityChange(fadeIn, 1);
    overlayChange(fadeIn, true);
    function opacityChange(element, opacity) {
      element.addEventListener("animationend", function () {
        element.style.opacity = opacity;
      });
    }
    function overlayChange(element, overlay) {
      element.addEventListener("animationend", function () {
        _that.overlay = overlay;
      });
    }
  },
  methods: {
    result() {
      this.$router.push({
        path: "/result",
        query: { answers: this.answers },
      });
    }
  }
};
</script>
