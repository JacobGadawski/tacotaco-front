<template>
  <v-app>
      <Navigation  @rightDrawer="rightDrawer = !rightDrawer"/>
      <v-main>
        <v-container>
          <transition name="fade">
            <nuxt />
          </transition>
        </v-container>
      </v-main>
      <AccountDrawer :rightDrawer="rightDrawer"/>
      <v-footer
        app
      >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/layout/Navigation'
import AccountDrawer from '@/components/layout/AccountDrawer'
export default {
  components: {
    Navigation,
    AccountDrawer
  },
  data () {
    return {
      rightDrawer: false,
    }
  }
}
</script>
