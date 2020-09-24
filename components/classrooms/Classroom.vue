<template>
    <div class="classrom d-flex pa-3 mb-4 align-center justify-center">
        <span v-if="!teacher">{{name}} with Grade {{ grade }}</span>
        <span v-else>{{ name }} with {{ teacher }} </span>
        <v-spacer></v-spacer>
        <div class="classrom-container d-flex align-center justify-center">
            <span>{{time}}</span>
            <v-btn icon @click="goToClassroom(id)">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script>
import Loader from '@/components/loader/Loader'
export default {
    components: {
        Loader
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            required: false
        }
    },
    methods: {
        goToClassroom( id ){
            this.$router.push( { name: "classroom-id", params: { id } } )
        }
    }
}
</script>
<style lang="scss" scoped>
.classrom {
    border: 1px solid black;
    border-radius: 25px;
    font-size: 1.2em;
    color: black;
    &-container{
        span{
            margin-right: 2rem;
        }
    }
}
</style>