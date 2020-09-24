<template>
    <div>
        <v-row class="d-flex justify-center mt-8">
            <h2 class="text-center">Users</h2>
            <p>{{roles}}</p>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-checkbox v-model="roles" label="Student" value="student" class="mr-4" :disabled="disabled"></v-checkbox>
            <v-checkbox v-model="roles" label="Teacher" value="teacher" class="mr-4" :disabled="disabled"></v-checkbox>
            <v-checkbox v-model="roles" label="Headmaster" value="admin" class="mr-4" :disabled="disabled"></v-checkbox>
            <v-checkbox v-model="roles" label="Admin" value="admin" class="mr-4" :disabled="disabled"></v-checkbox>
        </v-row>
    </div>
</template>
<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        roles: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
        }
    }
}
</script>