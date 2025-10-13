<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app floating class="elevation-1" :right="$vuetify.rtl" width="260"
      style="background: #172640"></v-navigation-drawer>
    <template v-slot:prepend>
      <div class="d-flex pa-2 justify-center" style="background: #172640">
        <img src="/images/" height="48" alt="logo" class="mr-1"
          @click="$router.push('/inicio/bannerInicial')" style="cursor: pointer" />
      </div>
      <hr />
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: this.$menu
    };
  }
}
</script>
