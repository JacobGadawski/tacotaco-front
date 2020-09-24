<template>
    <v-container>
        <v-row>
            <v-col :cols=12 md="3">
                <LeftSide />
            </v-col>
            <v-col :cols=12 md="6">
                <CenterSide />
            </v-col>
            <v-col :cols=12 md="3">
                <RightSide />
            </v-col>
        </v-row>
  </v-container>
</template>
<script>
import LeftSide from "@/components/dashboards/sides/student/Left"
import CenterSide from "@/components/dashboards/sides/student/Center"
import RightSide from "@/components/dashboards/sides/student/Right"
export default {
    components: {
        LeftSide,
        CenterSide,
        RightSide
    },
    data(){
        return {
            
        }
    }
}
</script>