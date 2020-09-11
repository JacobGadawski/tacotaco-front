<template>
    <Carousel :quizes="quizes" />
</template>
<script>
import Carousel from "@/components/quizes/Carousel"
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
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: false },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: true },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: true },
                        { value: '2.33', correct: false },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: true },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: true },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: true },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: true },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                },
                {
                    question: "What is the result of 2x + 3 + x = 10",
                    answers: [
                        { value: '1/5', correct: false },
                        { value: '2.33', correct: true },
                        { value: '3.25', correct: false },
                        { value: '1/3', correct: false },
                        { value: '1.75', correct: false },
                        { value: '2', correct: false },
                    ]
                }
            ] 
        };
    }
};
</script>

<style>
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
