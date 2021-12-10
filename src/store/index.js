import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfHeroes:[],
    objDataHeroes:{},
    offset:1,
    limit:20,
    objMoreDataHeroes:{}
  },
  mutations: {
    getHeroesMutation(state, posts) {
      state.listOfHeroes = posts;
    },
    getMoreHeroesMutation (state, posts){
      this.state.listOfHeroes.push(...objMoreDataHeroes,...post)
      
    }
  },
  actions: {
    getHeroesAction (context,offset) {
      let limit=this.state.limit+offset

      axios.get(`https://gateway.marvel.com:443/v1/public/characters?offset=${this.state.offset-1}&ts=1&limit=${limit}&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
      .then((response) => {
        // console.log(response)
        // console.log(response.data.data.results)
        
        let objDataHeroes={}
        let i = offset-1
        for (const dataHeroes of response.data.data.results) {
        // console.log(dataHeroes)
        let id = dataHeroes.id
        let name = dataHeroes.name;
        let thumbnailPath = dataHeroes.thumbnail.path
        let thumbnailExtension = dataHeroes.thumbnail.extension
        let description = dataHeroes.description
        let modified = new Date(dataHeroes.modified)
        let dateFormat = `${modified.getDate()}-${modified.getMonth()}-${modified.getFullYear()}`
        // console.log(dateFormat) 
        // Aca creo el objeto que contiene todos los datos de los Heroes
        objDataHeroes[i]={
          id:id,
          name:name,
          thumbnailPath:thumbnailPath,
          thumbnailExtension:thumbnailExtension,
          description: description,
          modified:dateFormat
          
        }
        i=i+1
      }
      context.commit("getHeroesMutation", objDataHeroes);
      });
      
    },
    
  },
  
})
