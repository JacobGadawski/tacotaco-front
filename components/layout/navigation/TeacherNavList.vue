<template>
  <v-list elevation="0" flat color="transparent">
      <v-list-item-group v-model="item" color="primary" class="d-flex">
        <v-list-item :to="{ name: 'index' }" exact>
          <v-list-item-content>
              <v-icon>mdi-home-variant-outline</v-icon>
            <!-- </v-btn> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :nuxt="true"
          exact
          :disabled="item.disabled"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>
<script>
export default {
    data(){
        return {
          item: 1,
          items: [
              { text: "Quizzes", to: { name: "quizes" } },
              { text: "Homework", to: { name: "statistics" }, disabled: true },
              { text: "TimeTable", to: { name: "users" }, disabled: true },
              { text: "Grades", to: { name: "support_ticket" }, disabled: true }
          ]
        }
    }
}
</script>
