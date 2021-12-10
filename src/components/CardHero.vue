<template>
<b-row>
  <b-col cols="3">
    <b-card
    class="card"
    :img-src="`${thumbnailPath}.${thumbnailExtension}`" :alt="`${nombre}`" img-height="410">
    </b-card>
  </b-col>
  <b-col cols="9" align-self="center">
    <h2>Nombre: {{ nombre }}</h2>
    <h3>Modificado: {{ modificado }}</h3>
  </b-col>
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
    ...mapActions(['editHeroAction']),
    editarCard() {
      this.editHeroAction(this.indice);
    }
  }
};
</script>

<style>
.card{
  margin: 6px;
  height: 400px;
  width: 350px;
  padding: 0;
}
.card:hover{
  transform: scale(1.05);
  z-index: 90;
}

#img{
  padding: 0;
}

</style>
