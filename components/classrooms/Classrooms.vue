<template>
    <v-card elevation="0" class="mt-6">
        <v-card-title>
            Classrooms
        </v-card-title>
        <v-card-text>
            <Classroom  v-for="(classroom, i) in items" :key="i" :name="classroom.name" :grade="classroom.grade" :time="classroom.time" :id="classroom.id" :teacher="classroom.teacher" />
        </v-card-text>
    </v-card>
</template>
<script>
import Classroom from "@/components/classrooms/Classroom"
export default {
    components: {
        Classroom
    },
    props: {
        items: {
            type: Array,
            default: [],
            required: true
        }
    },
    data(){
        return {
            
        }
    }
}
</script>