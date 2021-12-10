import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfHeroes:[],
    offset:0,

  },
  mutations: {
    getHeroesMutation(state, posts) {
      state.listOfHeroes = posts;
    },
    getMoreHeroesMutation (state, posts){
      console.log(state.listOfHeroes)
      state.listOfHeroes.push(...posts);
    }
  },
  actions: {
    getHeroesAction (context,state) {
      axios.get(`https://gateway.marvel.com:443/v1/public/characters?offset=${this.state.offset}&ts=1&limit=20&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
      .then((response) => {
        // console.log(response)
        // console.log(response.data.data.results)
        let objDataHeroes={}
        let i = 0
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
    getMoreHeroesAction(context,offset){
      console.log(offset)

      axios.get(`https://gateway.marvel.com:443/v1/public/characters?offset=${offset-1}&ts=1&limit=20&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
      .then(response => {
        console.log(response)
        let i = offset-1
        let objMoreDataHeroes={}

        for (const dataMoreHeroes of response.data.data.results) {
          let id = dataMoreHeroes.id
          let name = dataMoreHeroes.name;
          let thumbnailPath = dataMoreHeroes.thumbnail.path
          let thumbnailExtension = dataMoreHeroes.thumbnail.extension
          let description = dataMoreHeroes.description
          let modified = new Date(dataMoreHeroes.modified)
          let dateFormat = `${modified.getDate()}-${modified.getMonth()}-${modified.getFullYear()}`
          objMoreDataHeroes[i]={
            id:id,
            name:name,
            thumbnailPath:thumbnailPath,
            thumbnailExtension:thumbnailExtension,
            description: description,
            modified:dateFormat
          }
          i=i+1
        }
        })
      context.commit("getMoreHeroesMutation", objMoreDataHeroes)
    },
  },
  
})
