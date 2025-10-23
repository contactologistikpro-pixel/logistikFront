<template>
  <div>
    <v-card flat tile>
      <v-card-text class="mt-2">
        <v-row align="center">
          <v-col cols="12 " sm="8" class="d-flex align-center">
            <v-icon color="blue" class="mr-2">mdi-cog</v-icon>
            <div>
              <h3 class="blue--text text--darken-2 font-weight-bold mb-1">
                General
              </h3>
              <div class="grey--text text--darken-2">
                Configuración del sistema
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="4" class="d-flex justify-end pr-2">
            <img src="/images/logoNegro.png" alt="Logo" height="70" class="mr-2" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-alert color="warning" dark icon="mdi-information" border="left" prominent>
      <p>Apreciado(a) Administrador(a),</p>
      <p>
        En este módulo podrá gestionar la información administrativa de su empresa
        utilizada por el sistema para la generación de facturas electrónicas, reportes,
        comprobantes y demás documentos internos.
      </p>
      <p class="mt-2">
        <strong>Importante:</strong> Los datos configurados en esta sección son de uso exclusivo
        dentro del sistema y <strong>no modifican la información legal o registrada ante la DIAN
          ni ante otras entidades oficiales</strong>. Asegúrese de ingresar información verídica y
        actualizada para garantizar la correcta emisión de sus documentos comerciales.
      </p>
    </v-alert>

    <v-alert dense text outlined color="primary" icon="mdi-text-box-multiple-outline" class="text-center">
      <b>Configuración De La Empresa</b>
    </v-alert>

    <v-card class="pa-4 mt-4" max-width="1300" outlined>
      <v-form ref="formEmpresa" v-model="formValido">

        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="empresa.razon_social" label="Razón Social" prepend-inner-icon="mdi-domain" dense
              outlined required />
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field v-model="empresa.email" label="Email" prepend-inner-icon="mdi-map-marker" dense outlined
              required />
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field v-model="empresa.direccion" label="Dirección" prepend-inner-icon="mdi-map-marker" dense
              outlined required />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="empresa.nit" label="NIT" prepend-inner-icon="mdi-file-document" dense outlined
              required />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="empresa.telefono" label="Teléfono" prepend-inner-icon="mdi-phone" dense outlined
              required />
          </v-col>

        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark @click="guardarEmpresa()">Guardar</v-btn>
        </v-card-actions>

      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "general",

  data() {
    return {
      formValido: false,
      empresa: {
        razon_social: "",
        email: "",
        direccion: "",
        nit: "",
        telefono: "",
      }
    }
  },

  methods: {
    guardarEmpresa() {

    }
  }
}
</script>
