<template>
  <v-container
        class="fill-height"
        fluid
        :class="'img-background'"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
          <LoginCard />
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import LoginCard from '@/components/auth/LoginStepper'
export default {
    layout: "auth",
    components: {
        LoginCard
    }
}
</script>

<style scoped>
    .img-background {
        background: url("~assets/img/login.jpeg") no-repeat;
        background-position: center;
        background-size: cover;/* this is known for the safari*/
    }
</style>