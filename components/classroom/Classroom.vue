<template>
    <StudentClassroom v-if="userType === 'student'" :name="name" :teacher="teacher" :topic="topic"/>
    <TeacherClassroom v-else :name="name" :teacher="teacher" :topic="topic"/>
</template>
<script>
import StudentClassroom from "@/components/classroom/StudentClassroom";
import TeacherClassroom from "@/components/classroom/TeacherClassroom";
export default {
    components: {
        StudentClassroom,
        TeacherClassroom
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