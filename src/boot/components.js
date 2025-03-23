import { boot } from 'quasar/wrappers'
import BaseButton from '../components/ui/BaseButton.vue'

export default boot(({ app }) => {
  app.component('BaseButton', BaseButton)
})

export {}
