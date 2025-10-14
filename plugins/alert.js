import Vue from 'vue'
import Snackbar from '~/components/utils/Snackbar.vue'

// Crear un constructor del componente
const AlertConstructor = Vue.extend(Snackbar)

let instance = null

function showAlert(message, type = 'info', timeout = 3000) {
  // Si no existe la instancia, se crea una sola
  if (!instance) {
    instance = new AlertConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }

  // Pasar timeout y mostrar el mensaje
  instance.timeout = timeout
  instance.show(message, type)
}

// Registrar el método globalmente
Vue.prototype.$alert = showAlert
