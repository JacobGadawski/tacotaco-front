<template>
  <v-app-bar :clipped-left="clipped" fixed app :height="80" class="nav">
    <v-row>
      <v-col class="d-flex align-center justify-start">
        <nuxt-link :to="{ name: 'index' }" elevation="0" class="logo ml-12">
          <img src="~/assets/img/logo.png" alt="" />
        </nuxt-link>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <AdminNavList v-if="userType === 'admin'" />
        <StudentNavList v-if="userType === 'student'"/>
        <TeacherNavList v-if="userType === 'teacher'"/>
      </v-col>
      <v-col class="d-flex align-center justify-end">
        <v-btn
          tile
          outlined
          @click.stop="emit('rightDrawer')"
          class="rounded account"
          large
          style="text-transform: initial;"
        >
          <img src="~/assets/img/person.svg" alt="" /> My account
        </v-btn>
      </v-col>
    </v-row>
    <!-- <nuxt-link :to="{ name: 'index' }" elevation="0" class="logo ml-12">
      <img src="~/assets/img/logo.png" alt="" />
    </nuxt-link>
    <AdminNavList v-if="userType === 'admin'" />
    <StudentNavList v-if="userType === 'student'"/>
    <TeacherNavList v-if="userType === 'teacher'"/>
    <v-btn
      tile
      outlined
      @click.stop="emit('rightDrawer')"
      class="rounded account"
      large
      style="text-transform: initial;"
    >
      <img src="~/assets/img/person.svg" alt="" /> My account
    </v-btn> -->
  </v-app-bar>
</template>
<script>
import AdminNavList from "@/components/layout/navigation/AdminNavList";
import StudentNavList from "@/components/layout/navigation/StudentNavList";
import TeacherNavList from "@/components/layout/navigation/TeacherNavList";

export default {
  components: {
    AdminNavList,
    StudentNavList,
    TeacherNavList
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  computed: {
    userType() {
      return this.$store.getters["user/type"];
    }
  },
  methods: {
    emit(event, data) {
      this.$emit(event, data);
    }
  }
};
</script>

<style scoped>
.logo {
  max-width: 220px;
}
.logo img {
  width: 100%;
}
button.account {
  height: 50px;
}
button.account img {
  max-width: 40px;
  margin-right: 10px;
}
</style>
""
