<template>
  <v-app dark>
    <v-app-bar app color="#004991" dark dense flat>
      <v-toolbar-title style="font-weight: bold; letter-spacing: 1px;">

      </v-toolbar-title>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app floating class="elevation-1" :right="$vuetify.rtl" width="260"
      style="background: #004991">
      <template v-slot:prepend>
        <div class="d-flex pa-2 justify-center" style="background: #004991">
          <img src="/images/logoBlanco.png" height="80" width="240px" alt="logo" class="mr-1"
            @click="$router.push('/inicio/prin')" style="cursor: pointer" />
        </div>
        <hr />
      </template>

      <v-list style="background: #004991">
        <template v-for="item in items">
          <v-list-group :key="item.title" v-model="item.active" no-action append-icon="">
            <template v-slot:activator>
              <v-list-item-icon style="margin-right: 10px">
                <v-icon v-text="item.action" style="color: white"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title" style="font-size: 15px; color: white"></v-list-item-title>
              </v-list-item-content>
            </template>

            <template v-for="child in item.items">
              <v-list-item :key="child.title" :to="child.to" router exact style="padding-left: 45px; color: white"
                :class="{ 'active-child': child.to === $route.path }">
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-list-item-icon style="margin-right: 10px; color: white" v-on="on" v-bind="attrs">
                      <v-icon style="color: white">mdi-star-four-points-small</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="child.title" v-on="on" style="font-size: 15px"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <span>{{ child.title }}</span>
                </v-tooltip>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
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

<style scoped>
.v-list-item {
  transition: background-color 0.2s;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.active-child {
  background-color: rgba(255, 255, 255, 0.15) !important;
  border-left: 3px solid #ffffff;
}

.v-list-group__header {
  border-radius: 6px;
  margin: 2px 6px;
  transition: background-color 0.3s;
}

.v-list-group__header:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.v-list-group__items {
  background-color: rgba(255, 255, 255, 0.05);
  margin-left: 8px;
  border-left: 2px solid #ffffff;
  border-radius: 4px;
}

.v-navigation-drawer__content::-webkit-scrollbar {
  width: 8px;
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  background: #004991;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 4px;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
</style>
