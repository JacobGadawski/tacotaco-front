<template>
  <TeacherDashboard />
</template>

<script>
import { mapGetters } from 'vuex'
import TeacherDashboard from "@/components/dashboards/Teacher"
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
