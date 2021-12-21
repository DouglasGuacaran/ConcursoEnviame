<template>
    <b-row>
        <b-col>
        <b-row>
            <b-col>
                <vue-bootstrap-typeahead
                :data="this.listOfName"
                placeholder="Escriba el nombre del héroe..."
                v-model="name"
                />
            </b-col>
        </b-row>
        <b-row align-h="center">
          <b-col class="p-0 m-1" cols="3">
            <b-button
              class="text-center texto"
              size="sm"
              type="submit"
              @click="requestHero()"
            >
              Buscar
            </b-button>
          </b-col>
        </b-row>
        </b-col>
    </b-row>

</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            name:'',    
            addresses: [],
        }
    },
    computed:{
        ...mapState(['listOfName'])
    },
        methods:{
        ...mapActions(["getHeroAction"]),
        requestHero() {
            this.getHeroAction(this.name)
        },
    },
    mounted(){

    },
    
}

</script>

<style>

</style>