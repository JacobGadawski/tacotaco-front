<template>
    <div class="quiz-container pt-2 pb-2">
        <div class="quiz-header pr-1 pl-1 d-flex">
            <h3 class="text-center">Quiz {{number}}</h3>
        </div>
        <div class="quiz-content">
            <p>{{quiz.question}}</p>
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
        number: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.quiz {
    &-container{
        border-radius: 25px;
        overflow-y: auto;
        max-height: 300px;
        background: grey;
    }
    &-header{
        width: 100%;
        h3{
            width: 100%;
        }
    }
}
</style>