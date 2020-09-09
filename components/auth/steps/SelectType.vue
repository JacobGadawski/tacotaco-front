<template>
    <v-card color="rgba(255,255,255, .8)" class="pa-6">
      <div class="mb-4 text-center">
        <h2>Continue as</h2>
      </div>
       <v-card-actions>
      <v-btn @click="emitLoginType('student')" color="#ffc107">
        Student  <v-icon right>mdi-account</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="emitLoginType('teacher')" color="#ffc107">
        Teacher  <v-icon right>mdi-teach</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="emitLoginType('admin')" color="#ffc107">
        Admin <v-icon right>mdi-key-outline</v-icon>
      </v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
export default {
  methods: {
    emitLoginType( type ){
      this.$emit( "loginType", type )
    }
  }
}
</script>
