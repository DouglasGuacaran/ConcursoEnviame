<template>
      <b-card 
      :title="`${nombre}`"
      :img-src="`${thumbnailPath}.${thumbnailExtension}`" :alt="`${nombre}`">
        <b-card-text> Nombre del Heroe: {{ nombre }} </b-card-text>
        <b-card-text> Descripcion: {{ descripcion }} </b-card-text>
        <b-card-text> Modificado: {{ modificado }} </b-card-text>
        <Boton/>
      </b-card>
</template>

<script>
import Boton from '../components/BotonEditar.vue'
export default {
  name: "Card",
  components:{
    Boton
  },
  props: {
    nombre: String,
    thumbnailPath: String,
    thumbnailExtension: String,
    descripcion: String,
    modificado: String,
  },
};
</script>

<style>

</style>
