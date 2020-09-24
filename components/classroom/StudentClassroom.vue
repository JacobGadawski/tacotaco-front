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
            <span>{{ name }} with {{ teacher.first_name }}{{ teacher.last_name }}</span>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <h3 class="h2">Topic of the class : <span class="bold">{{ topic }}</span></h3>
        </v-col>
        <v-col cols="12">
            <Scores />
        </v-col>
        <v-col cols="12">
            <QuizesCompleted />
        </v-col>
        <!-- <v-col class="d-flex justify-center">
            <v-btn outlined rounded large :to="{ name: 'quizes-create' }" class="mr-4">
                Create new quiz
            </v-btn>
            <v-btn outlined rounded large>
                Create homework
            </v-btn>
        </v-col> -->
    </v-row>
    <Loader v-else />
</template>
<script>
import Loader from "@/components/loader/Loader"
import Scores from "@/components/scores/Scores"
import QuizesCompleted from "@/components/quizes/Completed"
export default {
    components: {
        Loader,
        Scores,
        QuizesCompleted
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
        }
    }
}
</script>