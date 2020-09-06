<template>
    <v-stepper v-model="loginStep" class="login-stepper">
  
        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card
                    color="rgba(255,255,255, 0.9)"
                    class="rounded-xl"
                >
                    <v-card-title class="justify-center">
                        <span v-if="!submitting">Login to your TacoTaco App</span>
                    </v-card-title>
                    <v-card-text>
                    <LoginForm @submit="submitLogin" />
                    </v-card-text>
                </v-card>
            </v-stepper-content>
    
            <v-stepper-content step="2">
                <v-card
                    color="rgba(255,255,255, 0.9)"
                    class="rounded-xl"
                >
                    <v-card-title class="justify-center">
                        <span v-if="!submitting">Hi, Thomas</span>
                    </v-card-title>
                    <v-card-text>
                    <div class="d-flex justify-center align-center">
                        <v-progress-circular v-if="submitting" indeterminate size="64"></v-progress-circular>
                        <div class="d-flex flex-column justify-center align-center" v-else >
                            <p>Good luck on today's classes!</p>
                            <v-icon x-large color="#3cb46e">mdi-account-check-outline</v-icon>
                        </div>
                    </div>
                    </v-card-text>
                </v-card>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
<script>
import LoginForm from "@/components/auth/LoginForm"
export default {
    data(){
        return {
            submitting: false,
            loggedIn: false,
            loginStep: 1
        }
    },
    components: {
        LoginForm
    },
    methods: {
        submitLogin( { email } ){
            console.log("Card event handler email: ", email)
            this.loginStep++;            
            this.submitting = !this.submitting
            setTimeout( () => {
                this.submitting = !this.submitting
                setTimeout( () => {
                    this.$router.push({ name: "index" })
                }, 2000 )
            }, 2000)
        }
    }
}
</script>
<style scoped>
.login-stepper{
    background-color: transparent;
    box-shadow: none;
}
</style>