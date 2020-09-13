<template>
    <div class="quiz-container pt-2 pb-2">
        <div class="quiz-header pr-1 pl-1 d-flex">
            <h3 class="text-center">Quiz {{number}}</h3>
        </div>
        <div class="quiz-question d-flex justify-center mt-4 pa-2">
            <span class="text-center">{{quiz.question}}</span>
        </div>
        <div class="quiz-content d-flex">
            <v-list class="quiz-list">
                <v-list-item v-for="( answer, i ) in quiz.answers" :key="i" class="quiz-item">
                    <v-list-item-content class="quiz-item-content">
                        <div class="d-flex justify-space-between">
                            <div>{{ letters[i] }}</div>
                            <v-list-item-title>{{answer.value}}</v-list-item-title>
                            <span>{{ 50 }}%</span>
                        </div>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
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
    },
    data(){
        return {
            letters: [ 'a)', 'b)', 'c)', 'd)', 'e)', 'f)' ]
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
    &-list{
        width: 100%;
    }
    &-item{
        border: 1px solid black;
        border-radius: 50px;
        &-content{

        }
    }
}
</style>