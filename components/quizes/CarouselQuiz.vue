
<template>
  <div class="quiz">
    <div class="quiz-container pa-4">
      <div class="quiz-header pr-1 pl-1 d-flex">
        <h3 class="text-center">Quiz {{ index + 1 }}</h3>
      </div>
      <div class="quiz-question d-flex justify-center mt-4 pa-2">
        <span class="text-center">{{ quiz.question }}</span>
      </div>
      <div class="quiz-content d-flex">
        <v-list class="quiz-list">
          <v-list-item
            v-for="(answer, i) in quiz.answers"
            :key="i"
            :class="{ 'quiz-item': true, correct: answer.is_correct }"
          >
            <v-list-item-content class="quiz-item-content">
              <div class="d-flex justify-space-between">
                <div class="order">{{ letters[i] }}</div>
                <v-list-item-title>{{ answer.value }}</v-list-item-title>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="quiz-actions d-flex pa-2">
        <v-btn rounded>Edit</v-btn>
        <v-spacer></v-spacer>
        <v-btn rounded>Delete</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      letters: ["a)", "b)", "c)", "d)", "e)", "f)"]
    };
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    &-content {
      .quiz-list {
        display: none;
      }
    }
  }
  &-container {
    border-radius: 25px;
    overflow-y: auto;
    max-height: 300px;
    border: 1px solid grey;
  }
  &-header {
    width: 100%;
    h3 {
      width: 100%;
    }
  }
  &-list {
    width: 100%;
  }
  &-item {
    border-radius: 50px;
    margin-bottom: 5px;
    background: rgba(255, 192, 46, 0.7);
    &.correct {
      background: #ffb300;
    }
    &-actions {
      margin-top: 5px;
      height: 20px;
    }
    &-content {
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      .order {
        text-transform: uppercase;
        margin-right: 10px;
      }
    }
  }
}
</style>