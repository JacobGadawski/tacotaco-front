<template>
    <v-row v-if="teacher && topic">
        <v-col cols="12" class="d-flex justify-center">
            <v-avatar 
                    color="#ffc107"
                    size="52"
                    class="mr-2 mb-2"
                >
                    <span class="white--text">{{ teacherName }}</span>
            </v-avatar>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <span>{{ name }} with Grade 1</span>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <h3 class="h2">Topic of the class : <span class="bold">{{ topic }}</span></h3>
        </v-col>
        <v-col cols="12">
            <Carousel :quizes="quizes" :show="4" class="mt-8" />
        </v-col>
        <v-col class="d-flex justify-center">
            <v-btn outlined rounded large :to="{ name: 'quizes-create' }" class="mr-4">
                Create new quiz
            </v-btn>
            <v-btn outlined rounded large>
                Create homework
            </v-btn>
        </v-col>
    </v-row>
    <Loader v-else />
</template>
<script>
import Carousel from "@/components/quizes/Carousel";
import Loader from "@/components/loader/Loader"
export default {
    components: {
        Loader,
        Carousel
    },
    props: {
        name: {
            type: String,
            required: true
        },
        teacher: {
            type: Object,
            required: true
        },
        topic: {
            type: String,
            required: true
        }
    },
    computed: {
        teacherName(){
            return `${this.teacher.first_name.slice(0,1)}${this.teacher.last_name.slice(0,1)}`
        },
        userType(){
            return this.$store.getters["user/type"]
        }
    },
    data(){
        return{
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
        }
    }
}
</script>