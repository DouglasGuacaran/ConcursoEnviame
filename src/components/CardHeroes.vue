<template>
<b-col class="cards">
  <b-card
      class="cards"
      :img-src="`${thumbnailPath}.${thumbnailExtension}`" :alt="`${nombre}`" img-height="170">
        <b-card-text class="texto-nombre"> {{ nombre }} </b-card-text>
        <b-card-text class="texto-descripcion"> Descripcion: {{ descripcion }} </b-card-text>
        <b-card-text class="texto-modificado"> Modificado: {{ modificado }} </b-card-text>
        <b-button class="btnEditar" size="sm" @click="editarCard()">Editar</b-button>
  </b-card>
</b-col>
    
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  components:{
  },
  props: {
    nombre: String,
    thumbnailPath: String,
    thumbnailExtension: String,
    descripcion: String,
    modificado: String,
    indice: String
  },
  methods: {
    ...mapActions(['editHeroAction']),
    editarCard() {
      this.editHeroAction(this.indice);
    }
  }
};
</script>

<style>
.cards{
  margin: 6px;
  height: 355px;
  width: 175px;
  padding: 0;
}
.cards:hover{
  transform: scale(1.1);
  z-index: 90;
}
.texto-nombre{
  margin: 2px;
  font-size: 14px;
  font-weight: 400;
}
.texto-descripcion{
  font-size: xx-small;
}
.texto-modificado{
  font-size: x-small;
  margin-bottom: 4px;
}
.card-body{
  padding: 3px;
}
  .btnEditar{
    background-color: red !important;
    border-color: red;
  }
</style>
