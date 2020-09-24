<template>
    <div>
        <StudentsOnline :users="onlineUsers" label="Who is online" />
        <Classrooms :items="classrooms"/>
    </div>
</template>
<script>
import StudentsOnline from "@/components/users/Online"
import Classrooms from "@/components/classrooms/Classrooms"
export default {
    components: {
        StudentsOnline,
        Classrooms
    },
    data(){
        return {
            classrooms: [
            ],
            onlineUsers: [],
        }
    },
    async mounted(){
        try {
            const { users } = await this.$tacoClient.users.listActive()
            this.onlineUsers = users
            this.classrooms = await this.$tacoClient.classrooms.list()
        } catch (error) {
            throw error
        }
    }
}
</script>