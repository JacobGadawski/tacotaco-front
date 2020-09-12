<template>
    <div class="classrom d-flex pa-3 mb-4 align-center justify-center">
        <span class="">{{name}} with Grade {{ grade }}</span>
        <v-spacer></v-spacer>
        <div class="classrom-container d-flex align-center justify-center">
            <span>{{time}}</span>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    props: {
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