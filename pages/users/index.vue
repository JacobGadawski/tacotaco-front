<template>
    <div>
        <Roles :disabled="loading" :roles="roles" />
        <UsersTable :loading="loading" :users="users" :roles="roles" class="mt-16"/>
    </div>
</template>
<script>
import UsersTable from "@/components/users/Table"
import Roles from "@/components/users/Roles"
export default {
    components: {
        UsersTable,
        Roles
    },
    computed: {
        stringifiedRoles(){
            let str = ''
            this.roles.forEach( (role, i) => {
                if( i == this.roles.length -1 ) {
                    str+=role
                }else{
                    str+=`${role},`
                }
            } )
            return str
        }
    },
    data(){
        return{
            loading: true,
            roles: [ 'student', 'teacher', 'admin' ],
            users: []
        }
    },
    async mounted(){
        try {
            this.users = await this.$store.dispatch( "user/fetchList", { roles: this.stringifiedRoles, entries: 10, page: 1 } )
            this.loading = false
        } catch (error) {
            console.error( error )
        }
    }
}
</script>