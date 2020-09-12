<template>
    <VueSlickCarousel v-bind="slickOptions">
      <Quiz v-for="( quiz,i) in quizes" :key="i" :quiz="quiz" :number="i" />
    </VueSlickCarousel>
</template>
<script>
import Quiz from "@/components/quizes/CarouselQuiz"
export default {
    props: {
        quizes: {
            type: Array,
            required: true
        }
    },
    components: {
        Quiz
    },
    data(){
        return {
            slickOptions: {
                slidesToShow: 4,
                arrows: true
            }
      }
  }
};
</script>