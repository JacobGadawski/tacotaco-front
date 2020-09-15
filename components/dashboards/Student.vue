<template>
  <v-container>
    <v-row>
      <v-col :cols="12" md="3">
        <LeftSide />
      </v-col>
      <v-col :cols="12" md="6">
        <CenterSide />
      </v-col>
      <v-col :cols="12" md="3">
        <RightSide />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LeftSide from "@/components/dashboards/sides/left/Teacher";
import CenterSide from "@/components/dashboards/sides/center/Teacher";
import RightSide from "@/components/dashboards/sides/right/Teacher";
export default {
  components: {
    LeftSide,
    CenterSide,
    RightSide
  },
  data() {
    return {
      students: [
        {
          name: "Tony Leader",
          performance: "95",
          points: 899,
          champion: false
        },
        {
          name: "Benjamin Davids",
          performance: "75",
          points: 899,
          champion: false
        },
        { name: "Jane Nany", performance: "35", points: 899, champion: false },
        { name: "Johny Jody", performance: "15", points: 899, champion: false }
      ],
      teams: [
        { name: "Red dragon", points: 1289 },
        { name: "Blue Whales", points: 1123 },
        { name: "Dark Phoenix", points: 985 }
      ]
    };
  }
};
</script>