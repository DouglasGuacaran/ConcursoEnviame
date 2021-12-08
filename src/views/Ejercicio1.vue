<template>
  <div>
    <h1>Calcula los números primos en un rango</h1>
      <div class="row">
        <div class="col">
          <span class="form-input m-2"> Ingrese primer número del rango</span>
          <input  v-model="num1" class="m-2" type="text" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="form-input m-2"> Ingrese segundo número del rango</span>
          <input v-model="num2" class="m-2" type="text" />
        </div>
      </div>

    <div class="row">
      <div class="col m-2">
        <button @click="calculoNumerosPrimos(`${num1}`,`${num2}`)">calcula</button>
      </div>
    </div>
<!-- 
    <div class="row">
      <div class="col">
        <span class="m-2"> Resultado</span>
        <div class="form-text m-2" id="emailHelp">{{ myPrimeArray }}</div>
        <div class="m-2 form-text"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Ejercicio1",
  data() {
    return {
      num1: "",
      num2: "",
      myPrimeArray: "",
    };
  },

  methods: {

    calculoNumerosPrimos(num1,num2) {
      if (num1 < 0 || num2 < 0){
        alert('Debe ingresar valores superiores a cero ')}
        else if (num1 =='' && num2 ==''){
        alert('Debe ingresar algún valor')
        }
              else if (num1 == num2){
        alert('Los valores deben ser distintos')
              }
              if (num2<num1)
      alert ('El primer valor debe ser mayor al segundo')
        if (num1<num2){
        const Array = [];
        for (let i = 1; i <= num2; i++) {
          Array.push(i);
        }

        const arrayFiltered = Array.slice(num1 - 1, num2);
        
        const myPrimeArray = arrayFiltered.filter((num) => {
          for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
          }
          return num !== 1;
        });

        this.myPrimeArray = myPrimeArray;
        alert("los valores calculados son: "+ myPrimeArray);
      }

    },
  },

  mounted() {},
};
</script>

<style>
</style>