<template>
  <v-card class="pa-6 mt-6" outlined tile width="100%">
    <v-card-title class="d-flex justify-space-between align-center">
      <div>
        <h4 class="blue--text text--darken-2 font-weight-bold mb-1"> Complete los datos administrativos de su empresa
        </h4>
      </div>
    </v-card-title>

    <v-card-text>
      <v-form ref="formEmpresa" v-model="formValido">
        <v-row dense>
          <!-- Razón Social -->
          <v-col cols="12" sm="6" md="6">
            <v-text-field v-model="empresa.razon_social" label="Razón Social" prepend-inner-icon="mdi-domain" outlined
              dense rounded required />
          </v-col>

          <!-- Email -->
          <v-col cols="12" sm="6" md="6">
            <v-text-field v-model="empresa.email" label="Email" prepend-inner-icon="mdi-email" outlined dense rounded
              required />
          </v-col>

          <!-- Dirección -->
          <v-col cols="12" sm="12" md="6">
            <v-text-field v-model="empresa.direccion" label="Dirección" prepend-inner-icon="mdi-map-marker" outlined
              dense rounded required />
          </v-col>

          <!-- NIT -->
          <v-col cols="12" sm="6" md="6">
            <v-text-field v-model="empresa.nit" label="NIT" prepend-inner-icon="mdi-file-document" outlined dense
              rounded required />
          </v-col>

          <!-- Teléfono -->
          <v-col cols="12" sm="6" md="6">
            <v-text-field v-model="empresa.telefono" label="Teléfono" prepend-inner-icon="mdi-phone" outlined dense
              rounded required />
          </v-col>

          <!-- Logo -->
          <v-col cols="12" sm="6" md="6">
            <v-file-input v-model="empresa.logo" label="Subir Logo" accept="image/*" prepend-inner-icon="mdi-image"
              outlined dense rounded />
          </v-col>
        </v-row>

        <v-row justify="end" class="mt-4">
          <v-btn color="primary" dark rounded @click="guardarEmpresa()">Guardar</v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    solicitudSeleccionada: {
      type: Object,
    }
  },

  data() {
    return {
      empresa: {
        razon_social: null,
        email: null,
        direccion: null,
        nit: null,
        telefono: null,
        logo: null,
      }
    }
  },

  methods: {
    guardarEmpresa() {

    }
  }
}
</script>
