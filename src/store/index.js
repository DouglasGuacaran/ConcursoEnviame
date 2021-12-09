import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfHeroes:[],
  },
  mutations: {
    getHeroesMutation(state, posts) {
      state.listOfHeroes = posts;
    },
  },
  actions: {
    getHeroes: async function (context) {
      const data = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b');
      const posts = await data.json();
      let objDataHeroes={}
      for (const dataHeroes of posts.data.results) {
        let id = dataHeroes.id
        let name = dataHeroes.name;
        let thumbnailPath = dataHeroes.thumbnail.path
        let thumbnailExtension = dataHeroes.thumbnail.extension
        let description = dataHeroes.description
        let modified = dataHeroes.modified
        // Aca creo el objeto que contiene todos los datos de los Heroes
        objDataHeroes[id]={ 
          name:name,
          thumbnailPath:thumbnailPath,
          thumbnailExtension:thumbnailExtension,
          description: description,
          modified:modified
        }
      }

      context.commit("getHeroesMutation", objDataHeroes);
    },
  },
  modules: {
  }
})
