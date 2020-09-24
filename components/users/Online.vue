<template>
    <v-card elevation="0">
        <v-card-title>
            {{label}}
        </v-card-title>
        <v-card-text v-if="users.length">
            <v-tooltip bottom v-for="(user, i) in users" :key="i">
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar 
                        color="#ffc107"
                        size="52"
                        class="mr-2 mb-2"
                        v-on="on"
                        v-bind="attrs"
                    >
                        <span class="white--text">{{ `${user.first_name.slice(0,1)}${user.last_name.slice(0,1) }`}}</span>
                    </v-avatar>
                </template>
                <span>{{ user.first_name }} {{ user.last_name }}</span>
            </v-tooltip>
        </v-card-text>
        <v-card-text v-else>
            <Loader />
        </v-card-text>
    </v-card>
</template>
<script>
import Loader from "@/components/loader/Loader"
export default {
    components: {
        Loader
    },
    props: {
        users: {
            type: Array,
            required: true,
            default: []
        },
        label: {
            type: String,
            required: true,
            default: ""
        }
    },
    data(){
        return {
        }
    }
}
</script>