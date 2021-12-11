<template>
<b-row class="">
    <b-card
    class="card"
    :img-src="`${thumbnailPath}.${thumbnailExtension}`" :alt="`${nombre}`" img-height="500">
    <h3 class="texto">Nombre: {{ nombre }}</h3>
    <h5 class="texto">Modificado: {{ modificado }}</h5>
    <b-button @click="close()">Cerrar</b-button>
    </b-card>
</b-row>
    
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
    ...mapActions(['editHeroAction', 'hideCardHeroAction']),
    editarCard() {
      this.editHeroAction(this.indice);
    },
    close(){
      console.log('llega al close')
      this.hideCardHeroAction();
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

.texto{
  font-family: "Roboto Condensed";
}

#img{
  padding: 0;
}

</style>
