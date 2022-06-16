import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faMagnifyingGlass)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
