import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Deve ser criada antes da instâcia root
export const eventBus = new Vue({
  methods: {
    selecionarFilme(filmeSelecionado) {
      this.$emit('selecionarFilme', filmeSelecionado)
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
