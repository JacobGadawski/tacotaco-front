<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-btn class="btn-classrom-leave" outlined rounded @click="goBack">
                    <v-icon left>mdi-arrow-left</v-icon>
                    Leave the classroom
                </v-btn>
                <StudentsOnline label="Who is in the class" :users="students" />
            </v-col>
            <v-col cols="9">
                <Classroom :teacher="teacher" name="Mathematics" :topic="topic"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import StudentsOnline from "@/components/users/Online"
import Classroom from "@/components/classroom/Classroom"
export default {
    components:{
        StudentsOnline,
        Classroom
    },
    data(){
        return {
            students: [
                // { name: "Tony Leader", performance: "95", points: 1899, champion: false },
                // { name: "Benjamin Davids", performance: "75", points: 1204, champion: false },
                // { name: "Jane Nany", performance: "35", points: 954, champion: false },
                // { name: "Johny Jody", performance: "15", points: 819, champion: false },
                // { name: "Tony Davids", performance: "95", points: 1899, champion: false },
                // { name: "Benjamin Nany", performance: "75", points: 1204, champion: false },
                // { name: "Jane Leader", performance: "35", points: 954, champion: false },
                // { name: "Johny Nany", performance: "15", points: 819, champion: false },
            ],
            classroom: {
                // teacher: "John Bohn",
                // name: "Mathematics",
                // topic: "Basic Algebra Part 2"
            },
            teacher: {},
            topic: ""
        }
    },
    methods:{ 
        goBack(){
            this.$router.back()
        }
    },
    async mounted(){
       try {
            const { id, students, teacher, topic } = await this.$tacoClient.classrooms.byId( this.$route.params.id )
            this.students = students
            this.teacher = teacher
            this.topic = topic
       } catch (error) {
           throw error
       }
    }
}
</script>
<style lang="scss" scoped>
.btn-classroom-leave{
    text-transform: capitalize;
}
</style>