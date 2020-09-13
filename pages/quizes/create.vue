<template>
    <div class="create-quiz mt-8 text-center">
        <h1>Create Quiz</h1>
        <div class="create-quiz-form d-flex justify-center align-center mt-6">
            <v-form v-model="valid">
                <v-textarea
                label="Question"
                v-model="form.question"
                required
                ></v-textarea>
                <v-text-field
                    v-for="(y,i) in answers"
                    :key="i"
                    :prepend-icon="letters[i]"
                    v-model="form.answers[i]"
                    append-outer-icon="mdi-check"
                    @click:append-outer="toggleCorrect(i)"
                    :success="correctAnswersIndexes.includes(i)"
                >
                test {{ i }}
                </v-text-field>
                <div class="d-flex justify-center align-center">
                    <v-btn
                        outlined
                        rounded
                        @click="addMoreAnswers"
                    >
                        Add more answers
                    </v-btn>
                </div>
                <v-btn
                        outlined
                        rounded
                        @click="addMoreAnswers"
                        class="mt-4"
                        large
                    >
                        Create quiz
                    </v-btn>
            </v-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            valid: false,
            maxAnswers: 6,
            answers: 4,
            letters: [ "a)", "b)", "c)", "d)", "e)", "f)", "g)" ],
            form: {
                question: "Write quiz question",
                answers: [
                    
                ],
            },
            correctAnswersIndexes: []
        }
    },
    methods: {
        addMoreAnswers(){
            if( this.answers === this.maxAnswers ){
                return
            }
            this.answers++
        },
        toggleCorrect( index ){
            if( !this.correctAnswersIndexes.includes(index)){
                console.log("pushed ", index)
                this.$set( this.correctAnswersIndexes, index, index )
            }else{
                const filtered = this.correctAnswersIndexes.filter( i => {
                    return index !== i;
                } )
                console.log( "should be", filtered )
                this.correctAnswersIndexes = filtered
                // this.$set( this.correctAnswersIndexes, index, null )
                console.log("removed ", index)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.create-quiz{
    &-form {
        form{
            width: 400px;
        }
    }
}
</style>