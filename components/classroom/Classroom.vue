<template>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-avatar 
                    color="#ffc107"
                    size="52"
                    class="mr-2 mb-2"
                >
                    <span class="white--text">{{ `${classroom.teacher.split(' ')[0][0]}${classroom.teacher.split(' ')[1][0]}` }}</span>
            </v-avatar>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <span>{{ classroom.name }} with {{ classroom.teacher }}</span>
            <h2>Topic of the class : <span class="bold">{{ classroom.topic }}</span></h2>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        classroom: {
            type: Object,
            required: true
        }
    },
    data(){
        return{

        }
    }
}
</script>