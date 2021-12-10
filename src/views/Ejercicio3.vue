<template>
<b-container>
    <b-row align-h="center" class="justify-content">
      <b-col cols="3">
        <b-img src="https://logos-marcas.com/wp-content/uploads/2020/11/Marvel-Logotipo-2012-2014.jpg" fluid alt="Logo Marvel"></b-img>
      </b-col>

    </b-row>
    <b-row align-h="center">
      <b-col lg="3" md="3" sm="7" class="text-center cards" v-for="(item,index) in listOfHeroes" :key="index+'A'">
      <CardHero 
      :nombre="item.name"
      :thumbnailPath="item.thumbnailPath"
      :thumbnailExtension="item.thumbnailExtension"
      :descripcion="item.description"
      :modificado="item.modified"
      />
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
      offset:20,
    }
  },
  components:{
    CardHero
  },
  computed:{
    ...mapState(['listOfHeroes']),
  },

  methods:{
...mapActions(['getHeroesAction']),
  handleScroll(){
    let scrollHeight=document.documentElement.scrollHeight
    if (window.scrollY+window.innerHeight>=scrollHeight - 10){
    this.getHeroesAction(this.offset=this.offset+1)
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
</style>