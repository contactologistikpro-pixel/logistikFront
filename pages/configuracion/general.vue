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

    <v-alert color="warning" dark icon="mdi-information" border="left" prominent outline>
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

    <!-- MODALES -->
    <template v-if="empresa.modalMiEmpresa">
      <MiEmpresa :solicitudSeleccionada="solicitudSeleccionada" />
    </template>

    <template v-else-if="empresa.modalCrear">
      <GestionCrear :solicitudSeleccionada="solicitudSeleccionada" />
    </template>
  </div>
</template>

<script>
import GestionCrear from '../../components/configuracion/GestionCrear.vue';
import MiEmpresa from '../../components/configuracion/MiEmpresa.vue';

export default {
  components: { MiEmpresa, GestionCrear },
  name: "general",

  data() {
    return {
      formValido: false,
      empresa: {
        razon_social: null,
        email: null,
        direccion: null,
        nit: null,
        telefono: null,
        logo: null,
        modalCrear: false,
        modalMiEmpresa: false,
      }
    }
  },

  methods: {

    // abrirModal(){
    //   if () {

    //   }
    // }
  }
}
</script>
