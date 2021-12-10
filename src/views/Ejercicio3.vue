<template>
<b-container>
    <b-row align-h="center" class="justify-content">
      <b-col cols="3">
        <b-img src="https://logos-marcas.com/wp-content/uploads/2020/11/Marvel-Logotipo-2012-2014.jpg" fluid alt="Logo Marvel"></b-img>
      </b-col>
    </b-row >
    <b-row class="formularioConsulta m-3" align-h="center">
      <b-col cols="10" align-h="center">
        <span>Nombre del Personaje:</span>
        <b-form-input></b-form-input>
        <b-row align-h="center" class="m-3">
            <b-col cols="4"><b-button class="btn-button">Buscar</b-button></b-col>
            <b-col cols="4"><b-button class="btn">Cancelar</b-button></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-if="showForm" class="formulario " align-h="center">
      <b-col cols="10" align-h="center">
        <span>Nombre del Personaje:</span>
        <b-form-input class="text-center" v-model="currentEdit.name">
          
        </b-form-input>
        <span>Descripcion:</span>
        <b-form-input class="text-center" v-model="currentEdit.description">
        </b-form-input>
        <b-row align-h="center" class="m-3">
          <b-col cols="4"><b-button class="btn btn-button" @click="cargarHeroData()">Aceptar</b-button></b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="m-3" align-h="center">
      <b-col lg="5" md="3" sm="7" class="text-center cards" v-for="(item,index) in listOfHeroes" :key="index+'A'">
      <CardHero 
      :nombre="item.name"
      :thumbnailPath="item.thumbnailPath"
      :thumbnailExtension="item.thumbnailExtension"
      :descripcion="item.description"
      :modificado="item.modified"
      :indice="index.toString()"
      />
      </b-col>
    </b-row>
    <b-row  v-if="isLoading" class="loading m-3" align-h="center">
      <b-col cols="1" align-h="center">
        <h2> Loading...</h2>
      </b-col>
    </b-row>    
</b-container>
</template>

<script>

import CardHero from '../components/CardHero.vue'
import { mapState, mapActions } from "vuex";
export default {
  name:'Ejercicio3',
    data(){
    return{
    }
  },
  components:{
    CardHero
  },
  computed:{
    ...mapState(['listOfHeroes', 'isLoading', 'showForm', 'pagina', 'currentEdit']),
  },

  methods:{
  ...mapActions(['getHeroesAction']),
  cargarHeroData(){
    console.log('CargoDatadelHeroe')
  },
  cancelar(){
    this.showForm = true
    console.log('Cancelo edición')
  },

  handleScroll(){
    let scrollHeight=document.documentElement.scrollHeight
    if (window.scrollY+window.innerHeight>=scrollHeight - 10){
    this.getHeroesAction(this.pagina)
    }
  }

  },
  mounted(){
    this.getHeroesAction(this.offset)
    window.addEventListener("scroll", this.handleScroll)
      }
    
  }

</script>

<style>
.loading{
  background: #FFFF;
  align-content: center;
  height: 400px;
  width: 1250px;
}
.formularioConsulta{
  background: #FFFF;
  height: 300px;
  width: 500px;
  z-index: 4;
  justify-self: center  ;
}
.formulario{
  background: #FFFF;
  height: 300px;
  width: 500px;
  z-index: 4;
  justify-self: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  margin: 0;
}
</style>


function (valor1, valor2) {

}

let a = 10;
