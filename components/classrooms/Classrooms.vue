<template>
    <v-card elevation="0" class="mt-6">
        <v-card-title>
            Classrooms
        </v-card-title>
        <v-card-text v-if="items.length">
            <Classroom  v-for="(classroom, i) in items" :key="i" name="Mathematics" :grade="1" :id="classroom.id" time="9:00 AM" :teacher="`${classroom.teacher.first_name} ${classroom.teacher.last_name}`" />
        </v-card-text>
        <v-card-text v-else>
            <Loader />
        </v-card-text>
    </v-card>
</template>
<script>
import Classroom from "@/components/classrooms/Classroom"
import Loader from "@/components/loader/Loader"
export default {
    components: {
        Classroom,
        Loader
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