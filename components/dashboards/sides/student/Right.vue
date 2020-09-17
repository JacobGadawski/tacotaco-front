<template>
    <div>
        <Homework class="mb-4"/>
        <Grades />
    </div>
</template>
<script>
import Homework from "@/components/homework/Homework"
import Grades from "@/components/grades/Grades"

export default {
    components: {
        Homework,
        Grades
    },
    data(){
        return {

        }
    }
}
</script>