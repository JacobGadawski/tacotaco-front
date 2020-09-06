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
        <v-btn
          icon
          @click.stop="fixed = !fixed"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn tile outlined @click.stop="emit('rightDrawer')" class="rounded ma-2 account pa-4" large style="text-transform: initial;" >
                <img src="~/assets/img/person.svg" alt="" /> My account
        </v-btn>
      </v-app-bar>
</template>
<script>
export default {
    data(){
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items:  [
                {
                icon: 'mdi-apps',
                title: 'Welcome',
                to: '/'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Inspire',
                to: '/inspire'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
    methods: {
        emit( event, data ){
            this.$emit( event, data )        
        }
    },
    mounted(){
      console.log( this.$store.user )
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