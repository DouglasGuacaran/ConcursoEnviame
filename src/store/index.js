import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { ListGroupPlugin } from 'bootstrap-vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfHeroes:[],
    objDataHeroes:{},
    pagina: 0,
    offset:0,
    isLoading: false,
    showForm: false,
    objMoreDataHeroes:{},
    currentEdit: {}
  },
  mutations: {
    getHeroesMutation(state, posts) {
      state.listOfHeroes = [...state.listOfHeroes, ...posts];
      state.pagina = state.pagina + 1;

    },
    getMoreHeroesMutation (state, posts){
      this.state.listOfHeroes.push(...objMoreDataHeroes,...post)
      
    }
  },
  actions: {
    getHeroesAction: async function (context,offset) {
      this.state.isLoading = true;
      await axios.get(`https://gateway.marvel.com:443/v1/public/characters?offset=${21 * this.state.pagina}&ts=1&limit=20&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
      .then((response) => {
        const loQueVaAListHeroes = response.data.data.results.map((objetoResult) => {
          let modified = new Date(objetoResult.modified)
          return {
            id: objetoResult.id,
            name: objetoResult.name,
            thumbnailPath: objetoResult.thumbnail.path,
            thumbnailExtension: objetoResult.thumbnail.extension,
            description: objetoResult.description,
            dateFormat: `${modified.getDate()}-${modified.getMonth()}-${modified.getFullYear()}`
          }
        })
        this.state.isLoading = false;
        context.commit("getHeroesMutation", loQueVaAListHeroes);
      });
      
    },
    editHeroAction(context, indice) {
      console.log('indice')
      console.log(indice)
      this.state.showForm = true;
      this.state.currentEdit = this.state.listOfHeroes[indice]
    } 
  },
  
})

