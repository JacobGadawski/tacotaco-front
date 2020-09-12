<template>
    <v-card elevation="0" class="mt-6">
        <v-card-title>
            Classrooms
        </v-card-title>
        <v-card-text>
            <Classroom  v-for="(classroom, i) in classrooms" :key="i" :name="classroom.name" :grade="classroom.grade" :time="classroom.time" />
        </v-card-text>
    </v-card>
</template>
<script>
import Classroom from "@/components/classrooms/Classroom"
export default {
    components: {
        Classroom
    },
    data(){
        return {
            classrooms: [
                { grade: 1,  name: 'Mathematics', time: '9:00am'},
                { grade: 2,  name: 'Physics', time: '10:00am'},
                { grade: 3,  name: 'Mathematics', time: '10:50am'},
                { grade: 4,  name: 'Physics', time: '1:00pm'},
                { grade: 5,  name: 'Mathematics', time: '2:15pm'}
            ]
        }
    }
}
</script>