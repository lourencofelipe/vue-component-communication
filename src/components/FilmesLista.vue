<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">
        <filmesListaIten 
            v-for="filme in filmes" 
            :key="filme.id" 
            :filme="filme" 
            @selecionarFilme="filmeSelecionado = $event"
            :class="aplicarClasseAtiva(filme)"
            />
      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  },
  data() {
    return {
      filmes: [
        { id: 1, titulo: 'Vingadores: Guerra Infinita' },
        { id: 2, titulo: 'Homem Formiga' },
        { id: 4, titulo: 'Pantera Negra' }
      ],
    filmeSelecionado: undefined
    }
  },
  methods: {
    aplicarClasseAtiva(filmeIterado) {
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id
      }
    }
  }
}
</script>
