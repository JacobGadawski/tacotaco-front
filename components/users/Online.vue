<template>
    <v-card elevation="0">
        <v-card-title>
            {{label}}
        </v-card-title>
        <v-card-text>
            <v-tooltip bottom v-for="(user, i) in users" :key="i">
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar 
                        color="#ffc107"
                        size="52"
                        class="mr-2 mb-2"
                        v-on="on"
                        v-bind="attrs"
                    >
                        <span class="white--text">{{ `${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}` }}</span>
                    </v-avatar>
                </template>
                <span>{{ user.name }}</span>
            </v-tooltip>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
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