<template>
    <div>
        <StudentsOnline :users="students" label="Students online:"/>
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
            classrooms: [
                { id: 1, grade: 1,  name: 'Mathematics', time: '9:00am'},
                { id: 2, grade: 2,  name: 'Physics', time: '10:00am'},
                { id: 3, grade: 3,  name: 'Mathematics', time: '10:50am'},
                { id: 4, grade: 4,  name: 'Physics', time: '1:00pm'},
                { id: 5, grade: 5,  name: 'Mathematics', time: '2:15pm'}
            ]
        }
    }
}
</script>