import Vue from 'vue'
import Snackbar from '~/components/utils/Snackbar.vue'

const AlertConstructor = Vue.extend(Snackbar)
let instance = null

function showAlert(message, type = 'info', timeout = 3000) {
  if (!instance) {
    instance = new AlertConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }
  instance.timeout = timeout
  instance.show(message, type)
}

Vue.prototype.$alert = showAlert
