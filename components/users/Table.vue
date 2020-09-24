<template>
  <v-data-table item-key="name" class="elevation-1" :loading="loading" :options.sync="options" loading-text="Loading... Please wait" :headers="headers" :items="users"></v-data-table>
</template>
<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        roles: {
            type: Array,
            default: []
        },
        users: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            headers: [
                {
                    text: 'First name',
                    align: 'start',
                    sortable: true,
                    value: 'first_name',
                },
                {
                    text: 'Last name',
                    sortable: true,
                    value: 'last_name',
                },
                {
                    text: 'Email',
                    sortable: true,
                    value: 'email',
                },
                {
                    text: 'Last activity',
                    sortable: true,
                    value: 'last_seen',
                }
            ],
            options: {}
        }
    },
    computed: {
    },
    async mounted(){
        try {
        } catch (error) {
            throw error
        }
    }
}
</script>