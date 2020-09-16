<template>
  <TeacherDashboard v-if="userType === 'teacher'"/>
</template>

<script>
import { mapGetters } from 'vuex'
import TeacherDashboard from "@/components/dashboards/Teacher"
import StudentDashboard from "@/components/dashboards/Student"
export default {
  components: {
    TeacherDashboard
  },
  computed: {
    ...mapGetters({
      userType: 'user/type'
    })
  }
}
</script>
