<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }}</span>
        <button class="btn btn-success float-right">Editar</button>
    </li>
</template>

<script>
export default {
    props: {
        filme: {
            type: Object,
            required: true
        }
    },
    computed: {
        filmeTituloConcat(){
            return `Titulo: ${this.filmeTitulo}`
        }
    }
}
</script>