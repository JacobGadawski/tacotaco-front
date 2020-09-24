<template>
  <v-card color="rgba(255,255,255, 0.9)" class="rounded-xl">
    <v-card-title class="justify-center"> Hi there! </v-card-title>
    <v-card-title class="justify-center"
      >Let's record a short introduction video!</v-card-title
    >
    <v-card-text class="d-flex justify-center">
      <v-btn rounded @click="startRecording">
        Start now
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    startRecording() {
      this.$emit("startRecording");
    }
  }
};
</script>