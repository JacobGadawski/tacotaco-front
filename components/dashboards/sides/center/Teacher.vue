<template>
    <div>
        <StudentsOnline :users="students"/>
        <Classrooms />
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
            students: [
                { name: "Tony Leader", performance: "95", points: 1899, champion: false },
                { name: "Benjamin Davids", performance: "75", points: 1204, champion: false },
                { name: "Jane Nany", performance: "35", points: 954, champion: false },
                { name: "Johny Jody", performance: "15", points: 819, champion: false },
                { name: "Tony Davids", performance: "95", points: 1899, champion: false },
                { name: "Benjamin Nany", performance: "75", points: 1204, champion: false },
                { name: "Jane Leader", performance: "35", points: 954, champion: false },
                { name: "Johny Nany", performance: "15", points: 819, champion: false },
            ],
        }
    }
}
</script>