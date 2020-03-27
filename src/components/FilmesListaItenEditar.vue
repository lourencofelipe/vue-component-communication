<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input type="text" class="form-control" placeholder="Insira o título" :value="filme.titulo">
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        filme: {
            type: Object,
            required: true
        }
    }
}
</script>