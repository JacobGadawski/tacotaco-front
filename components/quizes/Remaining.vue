<template>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <h2>Completed Quizes</h2>
        </v-col>
        <v-col cols="12" class="d-flex justify-center flex-column ">
            <p v-for="( quiz, i ) in quizes" :key="i" class="text-center">
                {{ i + 1 }}. {{ quiz.question }}
            </p>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>