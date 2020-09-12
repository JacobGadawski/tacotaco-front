<template>
    <v-card
        class="mx-auto mb-4"
    >
        <v-card-title class="justify-center">
            {{title}}
        </v-card-title>
        <v-card-text>
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                    <div class="d-flex">
                        <span>{{ `${i + 1}. ` }}{{ item[ keys[0] ] }}</span>
                        <v-spacer></v-spacer>
                        <span>{{ item[ keys[1] ] }} <span v-if="unit.length">{{ unit }}</span> </span>
                    </div>
                </v-list-item-content>
            </v-list-item>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        keys: {
            type: Array,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    },
    data(){
        return {

        }
    }
}
</script>