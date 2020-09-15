<template>
  <div class="quizes-carousel">
    <h3 class="quizes-header text-center mt-16 mb-12">All Quizes</h3>
    <Carousel :quizes="quizes" />
    <div class="quiz-action d-flex justify-center mt-16">
      <v-btn outlined rounded large :to="{ name: 'quizes-create' }">
        Create new quiz
      </v-btn>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/quizes/Carousel";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      quizes: [
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: false },
            { value: "2.33", correct: false, is_correct: true },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: true, is_correct: true },
            { value: "2.33", correct: false, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: false },
            { value: "2.33", correct: true, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: true }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: true },
            { value: "2.33", correct: true, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false },
            { value: "1.75", correct: false, is_correct: false },
            { value: "2", correct: false, is_correct: false }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: false },
            { value: "2.33", correct: true, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false },
            { value: "1.75", correct: false, is_correct: true },
            { value: "2", correct: false, is_correct: true }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: true },
            { value: "2.33", correct: true, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false },
            { value: "1.75", correct: false, is_correct: true },
            { value: "2", correct: false, is_correct: false }
          ]
        },
        {
          question: "What is the result of 2x + 3 + x = 10",
          answers: [
            { value: "1/5", correct: false, is_correct: false },
            { value: "2.33", correct: true, is_correct: false },
            { value: "3.25", correct: false, is_correct: false },
            { value: "1/3", correct: false, is_correct: false },
            { value: "1.75", correct: false, is_correct: false },
            { value: "2", correct: false, is_correct: true }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.quizes-header {
  font-size: 2rem;
}
.quizes-carousel {
  margin-top: 20px;
}
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
