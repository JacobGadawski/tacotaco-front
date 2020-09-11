<template>
  <v-list>
    <v-list-item-group v-model="item" color="primary" class="d-flex">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        :nuxt="true"
        link
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
      items: [
        { text: "Actions", to: { name: "actions" } },
        { text: "Statistics", to: { name: "statistics" }, disabled: true },
        { text: "Users", to: { name: "users" }, disabled: true },
        {
          text: "SupportTicket",
          to: { name: "support_ticket" },
          disabled: true
        }
      ]
    };
  }
};
</script>
