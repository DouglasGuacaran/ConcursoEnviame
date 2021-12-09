<template>
  <div>
    <h1>Calcula los números primos en un rango</h1>
      <div class="row">
        <div class="col">
          <span class="form-input m-2"> Ingrese primer número del rango</span>
          <input  v-model="num1" class="m-2" type="number" min="0" required/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="form-input m-2"> Ingrese segundo número del rango</span>
          <input v-model="num2" class="m-2" type="number" min="0" required/>
        </div>
      </div>

    <div class="row">
      <div class="col m-2">
        <button @click="calculoNumerosPrimos(`${num1}`,`${num2}`)">calcula</button>
      </div>
    </div>
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
      if (num1 =='') {
        alert('Alerta, Debe ingresar algún valor en el primer campo');
        return false;
      }
      else if (num1 == 0 || num2 == 0) {
        alert('Alerta, El valor debe ser mayor a cero')
        return false;
      }
      else if (num2 =='') {
        alert('Alerta, debe ingresar algún valor en el segundo campo');
        return false;
        }
      if (num1 >= num2 || num2 <= num1) {
        alert('El valor del segundo campo debe ser mayor')
        return false;
      }
      else{
        const Array = [];
        for (let i = 1; i <= num2; i++) {
          Array.push(i);
        }
        const arrayFiltered = Array.slice(num1-1, num2);
        const myPrimeArray = arrayFiltered.filter((num) => {
        for (let i = 2; i < num; i++) {
          if (num % i == 0) return false;
          }
            return num !== 1;
        });
        this.myPrimeArray = myPrimeArray;
        alert("los valores calculados son: "+ myPrimeArray);
      }
      console.log(num1)
      console.log(num2)
    },
  },

  mounted() {},
};
</script>

<style>
</style>