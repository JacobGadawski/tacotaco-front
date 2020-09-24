<template>
  <v-list elevation="0" flat color="transparent">
    <v-list-item-group v-model="item" color="primary" class="d-flex">
      <v-list-item disabled exact active-class="nav-active">
        <v-list-item-content>
          <v-icon>mdi-home</v-icon>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to ? item.to : null"
        :nuxt="true"
        :disabled="item.disabled"
        active-class="nav-active"
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
  data() {
    return {
      item: 3,
      items: [
        { text: "Actions", disabled: true },
        { text: "Statistics", disabled: true },
        { text: "Users", to: { name: "users" }, disabled: false },
        {
          text: "SupportTicket",
          disabled: true
        }
      ]
    };
  }
};
</script>
