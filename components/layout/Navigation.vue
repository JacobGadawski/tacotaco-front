<template>
     <v-app-bar
        :clipped-left="clipped"
        fixed
        app
        :height="80"
      >
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <!-- <v-btn
          icon
          @click.stop="miniVariant = !miniVariant"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn> -->
        <!-- <v-btn
          icon
          @click.stop="clipped = !clipped"
        >
          <v-icon>mdi-application</v-icon>
        </v-btn> -->
        <div class="logo">
          <img src="~/assets/img/logo.png" alt="" />
        </div>
        <v-spacer></v-spacer>
        <AdminNavList />
        <v-spacer></v-spacer>
        <v-btn tile outlined @click.stop="emit('rightDrawer')" class="rounded ma-2 account pa-4" large style="text-transform: initial;" >
                <img src="~/assets/img/person.svg" alt="" /> My account
        </v-btn>
      </v-app-bar>
</template>
<script>
import AdminNavList from "@/components/layout/navigation/AdminNavList"
export default {
  components: {
    AdminNavList
  },
  data(){
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
    computed: {
      userType(){
        return this.$store.getters["user/getType"]
      }
    },
    methods: {
        emit( event, data ){
            this.$emit( event, data )        
        }
    }
}
</script>

<style scoped>
    .logo{
        max-width: 220px;
    }
    .logo img {
        width: 100%;
    }
    button.account {
        height: 50px;
    }
    button.account img{
        max-width: 40px;
        margin-right: 10px;
    }
</style>