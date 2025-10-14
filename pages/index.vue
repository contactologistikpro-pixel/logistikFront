<template>
  <Inicio_sesion />
</template>

<script>
import Inicio_sesion from '@/components/inicio/Inicio_sesion.vue';

export default {
  name: 'LoginPage',
  layout: 'guest',
  components: { Inicio_sesion }
};
</script>
