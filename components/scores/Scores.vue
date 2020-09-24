<template>
    <v-row>
        <v-col v-for="( subject, i ) in subjects" :key="i">
            <div class="score d-flex align-center">
                <div class="score-circle mr-4 d-flex align-center justify-center">{{ subject.value }}{{subject.type}}</div>
                <div class="score-text">{{ subject.name }}</div>
            </div>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            subjects: [
                { value: 92, name: 'Alertness', type: '%', color: 'light-green darken-2' },
                { value: 98, name: 'Quiz Score', type: '%',color: 'light-green darken-1' },
                { value: "3/5", name: 'Quizess Answered Today', color: 'lime accent-2'  }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.score{
    &-circle{
        font-size: 1.2rem;
        width: 56px;
        height: 56px;
        background: grey;
        color: #fff;
        border-radius: 50%;
    }
}
</style>