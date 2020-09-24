<template>
    <v-card
        class="mx-auto mb-4"
    >
        <v-card-title class="justify-center">
            {{title}}
        </v-card-title>
        <v-card-text v-if="items.length">
            <v-list-item v-for="(item, i) in items.slice(0, max ? max : items.length + 1 )" :key="i">
                <v-list-item-content>
                    <div class="d-flex">
                        <span>{{ `${i + 1}. ` }}{{ item[ keys[0] ] }}{{ item[ keys[1] ] }}</span>
                        <v-spacer></v-spacer>
                        <span>{{ item[ keys[2] ] }} <span v-if="unit.length">{{ unit }}</span> </span>
                    </div>
                </v-list-item-content>
            </v-list-item>
        </v-card-text>
        <v-card-text v-else>
            <Loader />
        </v-card-text>
    </v-card>
</template>
<script>
import Loader from '@/components/loader/Loader'
export default {
    components: {
        Loader
    },
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
        },
        max: {
            type: Number
        }
    },
    data(){
        return {

        }
    }
}
</script>