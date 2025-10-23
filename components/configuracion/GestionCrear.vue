<template>
  <v-card class="pa-6 mt-6 elevation-3 rounded-lg" outlined>
    <!-- Encabezado -->
    <v-card-title class="d-flex flex-column align-start pb-2">
      <h3 class="text-h5 font-weight-bold blue--text text--darken-2">
        Configuración de Empresa
      </h3>
      <span class="text-subtitle-2 grey--text">
        Complete la información administrativa para la facturación y documentos legales.
      </span>
    </v-card-title>

    <v-divider class="my-4"></v-divider>

    <v-card-text>
      <v-form ref="formEmpresa">
        <v-row dense>

          <!-- Sección Identificación -->

          <v-col cols="12">
            <h4 class="text-h5 font-weight-bold blue--text text--darken-2">
              <v-icon left class="text-h5 font-weight-bold blue--text text--darken-2">mdi-domain</v-icon> Identificación Legal
            </h4>
          </v-col>
          <v-spacer></v-spacer>

          <v-col cols="12" sm="6">
            <v-text-field v-model="empresa.razon_social" label="Razón Social" prepend-inner-icon="mdi-domain" outlined
              dense rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="empresa.nit" label="NIT" prepend-inner-icon="mdi-file-document" outlined dense
              rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete v-model="empresa.regimen" label="Régimen Tributario"
              prepend-inner-icon="mdi-briefcase-check" outlined dense rounded required>
            </v-autocomplete>
          </v-col>

          <!-- Sección Ubicación -->

          <v-col cols="12" class="mt-4">
            <h4 class="text-h5 font-weight-bold blue--text text--darken-2">
              <v-icon left class="text-h5 font-weight-bold blue--text text--darken-2">mdi-map</v-icon> Ubicación
            </h4>
            <v-spacer></v-spacer>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="empresa.direccion" label="Dirección" prepend-inner-icon="mdi-map-marker" outlined
              dense rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete v-model="empresa.pais" label="País" prepend-inner-icon="mdi-home-city" outlined dense
              rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete v-model="empresa.departamento" label="Departamento" prepend-inner-icon="mdi-volcano-outline"
              outlined dense rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete v-model="empresa.ciudad" label="Ciudad" prepend-inner-icon="mdi-city" outlined dense rounded
              required />
          </v-col>

          <!-- Sección Contacto -->

          <v-col cols="12" class="mt-4">
            <h4 class="text-h5 font-weight-bold blue--text text--darken-2">
              <v-icon left class="text-h5 font-weight-bold blue--text text--darken-2">mdi-phone-dial</v-icon> Información de Contacto
            </h4>
          </v-col>
          <v-spacer></v-spacer>

          <v-col cols="12" sm="6">
            <v-text-field v-model="empresa.email" label="Correo Electrónico" prepend-inner-icon="mdi-email" outlined
              dense rounded required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="empresa.telefono" label="Teléfono" prepend-inner-icon="mdi-phone" outlined dense
              rounded required />
          </v-col>

          <!-- Sección Imagen -->
          <v-col cols="12" class="mt-4">
            <h4 class="text-h5 font-weight-bold blue--text text--darken-2">
              <v-icon left class="text-h5 font-weight-bold blue--text text--darken-2">mdi-image-check</v-icon> Logo Corporativa
            </h4>
          </v-col>
          <v-spacer></v-spacer>

          <v-col cols="12" sm="6">
            <v-file-input v-model="empresa.logo" label="Subir Logo" accept="image/*" prepend-inner-icon="mdi-image"
              outlined dense rounded />
          </v-col>
        </v-row>

        <!-- Botón -->
        <v-row justify="end" class="mt-6">
          <v-btn color="primary" dark rounded large @click="guardarEmpresa()">
            <v-icon left>mdi-content-save</v-icon> Guardar Datos
          </v-btn>
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
        ciudad: null,
        pais: null,
        regimen: null,
        departamento: null,

      }
    }
  },

  methods: {
    guardarEmpresa() {

    }
  }
}
</script>
