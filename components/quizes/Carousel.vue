<template>
  <VueSlickCarousel v-bind="slickOptions">
    <Quiz v-for="(quiz, i) in quizes" :key="i" :quiz="quiz" :index="i" />
    <template #prevArrow>
      <div class="custom-arrow left">
        <v-btn color="black" class="ma-2 white--text" small fab>
          <v-icon dark>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-arrow right">
        <v-btn color="black" class="ma-2 white--text" small fab>
          <v-icon dark>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </template>
  </VueSlickCarousel>
</template>
<script>
import Quiz from "@/components/quizes/CarouselQuiz";
export default {
  props: {
    quizes: {
      type: Array,
      required: true
    },
    show: {
      type: Number,
      default: 5
    }
  },
  components: {
    Quiz
  },
  computed: {
    slickOptions(){
      return {
        slidesToShow: this.show,
        stagePadding: 50,
        arrows: true
      }
    }
  },
  data() {
    return {
      
    };
  }
};
</script>
<style lang="scss" scoped>
.slick-slide {
  padding: 0 8px;
  box-sizing: border-box;
}

.custom-arrow {
  position: absolute;
  z-index: 99;
  top: 45%;
  &.right {
    right: -50px;
  }
  &.left {
    left: -50px;
  }
}
</style>