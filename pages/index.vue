<template>
  <div>
    <!-- PAGE LOGUEO -->
    <Login />
  </div>
</template>

<script>
import Inicio_sesion from '../components/inicio/Inicio_sesion.vue';

export default {

  // middleware: ['guest'],
  name: 'Login',
  layout: 'guest',

  components: {
    Inicio_sesion
  }
};

</script>
