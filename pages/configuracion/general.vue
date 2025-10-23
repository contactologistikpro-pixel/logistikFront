<template>
  <v-card>

    <v-card-text>


      <header-pages :icon="'mdi-cog'" :titulo="'General'" :subtitulo="'Configuración del sistema.'" />

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

      <template v-if="modalMiEmpresa">
        <MiEmpresa :solicitudSeleccionada="solicitudSeleccionada" />
      </template>

      <template v-else-if="modalCrear">
        <GestionCrear :solicitudSeleccionada="solicitudSeleccionada" />
      </template>

    </v-card-text>
  </v-card>
</template>

<script>
import GestionCrear from '../../components/configuracion/GestionCrear.vue';
import MiEmpresa from '../../components/configuracion/MiEmpresa.vue';
import HeaderPages from '../../components/header/headerPages.vue';

export default {
  components: { MiEmpresa, GestionCrear, HeaderPages },
  name: "general",

  data() {
    return {
      modalMiEmpresa: false,
      modalCrear: true,
    }
  },

  mounted() {

  },

  methods: {
    guardarEmpresa() {

    }
  }
}
</script>