<template>
    <v-form ref="form">
        <div class="row pa-4">
            <div class="form-input-container d-flex pt-2">
              <v-text-field
                v-model="email"
                :rules="[emailRules.required, emailRules.email]"
                color="#ffc107"
                outlined
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :validate-on-blur="true"
                :rules="[passwordRules.required, passwordRules.min]"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                color="#ffc107"
                label="Password"
                outlined
                required
              ></v-text-field>
              <div class="d-flex pa-2 align-center justify-center">
                 <v-btn
                  color="#ffc107"
                  @click="handleSubmit"
                >
                  Login
                </v-btn>
              </div>
            </div>
        </div>
    </v-form>
</template>
<script>
export default {
    data(){
        return {
          showPassword: false,
          emailRules: {
            required: value => !!value || 'Required.',
            email: value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
            }
          },
          passwordRules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 4 || 'Min 4 characters'
          },
          email: "",
          password: ""
        }
    },
    methods: {
        async handleSubmit(e){
            console.log(e)
            e.preventDefault();
            if( this.$refs.form.validate() ){
              this.$emit("submit", { email: this.email, password: this.password })
            }else{
              console.log("bad validation")
            }
        }
    }
}
</script>
<style scoped>
.form-input-container  {
    min-height: 70px;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
}
.form-input-container .simple input {
    flex-grow: 8;
    padding-left: 10px;
    outline: none;
}
.form-input-container .simple button {
    flex-grow: 2;
    background-color: #fdca5f;
    outline: none;
}
.form-input-container .simple button i {
    font-size: 2.5em;
}
</style>
