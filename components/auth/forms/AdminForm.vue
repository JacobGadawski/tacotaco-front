<template>
  <v-card
      color="rgba(255,255,255, 0.9)"
      class="rounded-xl"
  >
      <v-card-title class="justify-center">
          <span>Administrator login</span>
      </v-card-title>
      <v-card-text>
        <LoginInput @submit="submitLogin" :showPassword="true" />
      </v-card-text>
  </v-card>
</template>
<script>
import LoginInput from "@/components/auth/input/AdminLoginInput"
export default {
  components: {
    LoginInput
  },
  methods: {
    submitLogin( data ){
      this.$emit( "submit", data )
    }
  }
}
</script>
