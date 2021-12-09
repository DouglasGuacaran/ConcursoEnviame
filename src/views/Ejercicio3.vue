<template>
<div class="ejercicio3">
    <div >
      <img src="#" alt="">
    </div>
    <div class="row" cols="12">
      <div class="col-2" v-for="(item,index) in listOfHeroes" :key="index+'A'">
      <CardHero 
      :nombre="item.name"
      :thumbnailPath="item.thumbnailPath"
      :thumbnailExtension="item.thumbnailExtension"
      :descripcion="item.description"
      :modificado="item.modified"
      />
    </div>
    </div>
    
</div>
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
    ...mapState(['listOfHeroes']),
  },
  methods:{
    ...mapActions(['getHeroes']),
    scroll(){
      window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
          .then (response => {
            const posts = response
            console.log(posts)
            })
            // let objDataHeroes={}
            // for (const dataHeroes of posts.data.results) {
            // let id = dataHeroes.id
            // let name = dataHeroes.name;
            // let thumbnailPath = dataHeroes.thumbnail.path
            // let thumbnailExtension = dataHeroes.thumbnail.extension
            // let description = dataHeroes.description
            // let modified = dataHeroes.modified
            // objDataHeroes[id]={ 
            //   name:name,
            //   thumbnailPath:thumbnailPath,
            //   thumbnailExtension:thumbnailExtension,
            //   description: description,
            //   modified:modified
            
            // console.log(objdataHeroes)
            // this.listOfHeroes.push(response.data.results[0]);
          
          // })
        }
      }
    }
  },
  mounted(){
    this.getHeroes()
    this.scroll()
  }


}
</script>

<style>
</style>