<template>
  <v-stepper v-model="loginStep" class="login-stepper">
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-alert type="error" border="left" v-model="showAlert" close-text="Close" dismissible>
            {{errorMsg}}
        </v-alert>
        <SelectLoginType @loginType="handleLoginType" />
      </v-stepper-content>
      <v-stepper-content step="2">
        <StudentForm @submit="submitLogin" v-if="loginType === 'student'" />
        <TeacherForm @submit="submitLogin" v-if="loginType === 'teacher'" />
        <AdminForm @submit="submitLogin" v-if="loginType === 'admin'" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          color="rgba(255,255,255, 0.9)"
          class="rounded-xl"
          v-if="loginType !== 'student'"
        >
          <v-card-title class="justify-center">
            <span v-if="!submitting">Hi, Thomas</span>
          </v-card-title>
          <v-card-text>
            <div class="d-flex justify-center align-center">
              <v-progress-circular
                v-if="submitting"
                indeterminate
                size="64"
              ></v-progress-circular>
              <div
                class="d-flex flex-column justify-center align-center"
                v-else
              >
                <p>Good luck on today's classes!</p>
                <v-icon x-large color="#3cb46e"
                  >mdi-account-check-outline</v-icon
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
        <WebCamAuth v-else @startRecording="startRecording" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import SelectLoginType from "@/components/auth/steps/SelectType";
import StudentForm from "@/components/auth/forms/StudentForm";
import TeacherForm from "@/components/auth/forms/TeacherForm";
import AdminForm from "@/components/auth/forms/AdminForm";
import WebCamAuth from "@/components/auth/webcam/WebCamAuth";
export default {
  data() {
    return {
      submitting: false,
      loggedIn: false,
      loginType: null,
      loginStep: 1,
      showAlert: false,
      errorMsg: ''
    };
  },
  components: {
    SelectLoginType,
    StudentForm,
    TeacherForm,
    AdminForm,
    WebCamAuth
  },
  methods: {
    async submitLogin( data ) {
        try {
            console.log("Card event handler email: ", data.email);
            console.log(`loinType ${this.loginType}`);
            await this.$store.dispatch("user/login", data)
            this.loginStep++;
            this.submitting = !this.submitting;
            setTimeout( () => {
              if( this.loginType === 'admin' ){
                  this.$router.push({ name: "users" });
              }else{
                  this.$router.push({ name: "index" });
              }
            }, 2000 )
        } catch (error) {
            this.loginStep = 1;
            this.errorMsg = error.message;
            this.showAlert = true;
            console.error( error )
        }
    },
    handleLoginType(type) {
      console.log(`Continue as ${type}`);
      this.loginType = type;
      this.loginStep = 2;
    },
    startRecording() {
      console.log("RECORD - connect to socket");
    }
  }
};
</script>
<style scoped>
.login-stepper {
  background-color: transparent;
  box-shadow: none;
}
</style>
