<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
      floating
      class="elevation-1"
      :right="$vuetify.rtl"
      width="260"
      style="background: #172640"
    >
      <template v-slot:prepend>
        <div class="d-flex pa-2 justify-center" style="background: #172640">
          <img
            src="/static/images/logoPrincipal.jpeg"
            height="50"
            alt="logo"
            class="mr-1"
            style="cursor: pointer"
          />
        </div>
        <hr />
      </template>

      <v-list style="background: #172640">
        <template v-for="item in items">
          <v-list-group
            :key="item.title"
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-icon style="margin-right: 5px">
                <v-icon v-text="item.action" style="color: white"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  v-text="item.title"
                  style="font-size: 13px; color: white"
                ></v-list-item-title>
              </v-list-item-content>

              <v-icon style="color: white">mdi-chevron-down</v-icon>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: true,
      items: this.$menu,
    };
  },
};
</script>
