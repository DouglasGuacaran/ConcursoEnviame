import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfHeroes:[],
    objDataHeroes:{},
    pagina: 0,
    offset:0,
    isLoading: false,
    showForm: false,
    showCardHero: false,
    noCardHero: false,
    objMoreDataHeroes:{},
    currentEdit: {},
    Hero:{},
  },
  mutations: {
    getHeroesMutation(state, posts) {
      state.listOfHeroes = [...state.listOfHeroes, ...posts];
      state.pagina = state.pagina + 1;
    },
    getMoreHeroesMutation (state, posts){
      this.state.listOfHeroes.push(...objMoreDataHeroes,...posts)
    },
    getHeroMutation (state,posts){
      state.Hero = [...posts]
    }
  },
  actions: {
    getHeroesAction: async function (context,offset) {
      setTimeout(()=>{},2000)
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
        this.state.isLoading = true;
        context.commit("getHeroesMutation", loQueVaAListHeroes);
      });
    },
    editHeroAction(context, indice) {
        this.state.showForm = true;
      this.state.currentEdit = this.state.listOfHeroes[indice]
    },
    getHeroAction: async function (context,name) {
      this.state.isLoading = false;
      setTimeout(()=>{},2000)
      this.state.isLoading = true;
      await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&limit=20&apikey=b1f34175d9d5ab7a8ff4a2d091499ed0&hash=1838612144f50b3aefa8f42a4189473b`)
      .then((response) => {
        const loQueVaHero = response.data.data.results.map((objetoResult) => {
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
        this.state.showCardHero = true;
        context.commit("getHeroMutation", loQueVaHero);
      }
      ).catch((error)=>{console.log(error)
        this.state.noCardHero = true;})
    },
    changeOnStoreAction(context,posts){
      this.state.showForm = false;
    },
    hideCardHeroAction() {
      console.log('action')
      this.state.showCardHero = false;
    }
  },
})

