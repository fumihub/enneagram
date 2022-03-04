<template>
  <v-container class="px-6">
    <v-row align="center" justify="center">
      <h1 class="display-1 font-weight-bold my-3">9タイプ解説</h1>
      <v-col cols="12">
        <v-row>
          <v-col align="center" justify="center" class="col-12 col-sm-6">
            <v-img
              :src="require('../assets/typeGraphAnimal.png')"
              :lazy-src="require('../assets/typeGraphAnimal.png')"
              class="typeGraph"
              @load="load()"
            />
          </v-col>
          <v-col class="col-12 col-sm-6">
            <p></p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, i) in types"
            :key="i"
            align="center"
            justify="center"
            class="col-12 col-sm-6 type-col"
          >
            <v-card class="cover-slide">
              <div class="card">
                <v-img v-bind:src="item.src" v-bind:lazy-src="item.src" />
                <h2 class="ma-3 text-left" v-html="item.type"></h2>
                <v-card-text>
                  <p class="text-left">
                    {{ item.text }}
                  </p>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center" justify="center">
            <v-btn x-large color="success" to="/" dark class="ma-3">
              タイトルへ
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
    // タイプをWebAPIから取得
    axios.get("/enneagram/data/types.json").then((response) => {
      this.types = response.data.types;
    });
  },
  mounted() {},
  data() {
    return {
      types: [],
    };
  },
  methods: {
    load() {
      // 画像がダウンロードされてからスクロールを監視
      const els = document.querySelectorAll(".cover-slide");
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
        once: true,
      };
      const cb = function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            if (options.once) {
              observer.unobserve(entry.target);
            }
          }
        });
      };

      // InterSectionObserverをインスタンス化
      const io = new IntersectionObserver(cb, options);
      // 「cover-slide」クラスの要素を監視
      els.forEach((el) => io.observe(el));
    },
  },
};
</script>

<style lang="scss">
.typeGraph {
  max-width: 400px;
}

.type-col {
  display: flex;
  align-items: stretch;
  & .cover-slide {
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 100%;
      bottom: 0;
      background-color: #eaebe6;
    }

    &.inview {
      &::after {
        animation: kf-cover-slide 1.5s ease-in-out 0.5s forwards;
      }
    }
  }
}

@keyframes kf-cover-slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.card {
  opacity: 0;

  .inview & {
    opacity: 0;
    animation: kf-card 1.5s ease-in-out 0.5s forwards;
  }
}

@keyframes kf-card {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}
</style>
