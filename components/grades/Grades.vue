<template>
  <v-card>
    <v-card-title class="justify-center">Latest Grades</v-card-title>
    <v-card-text class="tools-content">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
          class="tools-item"
          :disabled="item.disabled"
        >
          <v-list-item-content class="tools-content">
            {{ item.name }} {{ item.value }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions class="justify-center">
        <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        outlined
                        v-on="on"
                        v-bind="attrs"
                    >
                        More
                    </v-btn>
                </template>
                <span>Work in progress</span>
            </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: "Mathematics", value: 4.9, disabled: true },
        {
          name: "Geography",
          value: 4.1,
          disabled: true
        },
        { name: "Physics", value: 4.3, disabled: true }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.tools {
  &-content {
    ::before {
      opacity: 0;
    }
  }
  &-content {
    color: black;
  }
}
</style>