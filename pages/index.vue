<template>
  <TeacherDashboard v-if="userType === 'teacher'"/>
  <StudentDashboard v-else-if="userType === 'student'"/>
  <div v-else>else</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeacherDashboard from "@/components/dashboards/Teacher"
import StudentDashboard from "@/components/dashboards/Student"
export default {
  components: {
    TeacherDashboard,
    StudentDashboard
  },
  computed: {
    ...mapGetters({
      userType: 'user/type'
    })
  }
}
</script>
