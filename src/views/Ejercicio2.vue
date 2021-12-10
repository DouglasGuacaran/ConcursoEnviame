<template>
  <b-container class="ejercicio2">
    <b-row>
      <b-col>
        <h1>Ejercicio 2</h1>
      </b-col>
    </b-row>
    <b-row class="resultado">
      <b-col sm="10" md="7" lg="4">
        <span 
          class="text" >let result = {{Json1}}
        </span>
      </b-col>
    </b-row>  
  </b-container>
</template>

<script>

export default {
name:'Ejercicio2',
data(){
  return{
    Json1:'',
  }
},
components:{
  
},
methods:{
  JSON(){
  //JSON
  let values =  {
    1: {
      carrier: "CCH",
      service: "DEX",
    },
    17: {
      carrier: "CHP",
      service: "express",
    }
  }
  // JSON
  let json = {
    data: {
      BUIN: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17
      },
      LAJA: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1
      },
      LEBU: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1
      },
      LOTA: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17
      }
    }
}

// Datos del json 1 //
console.log(values);
// Datos del json 2 //
console.log(json);
// Trabajaremos con el json.data//
console.log(json.data);
// del Objeto json.data extraigo un arreglo de props
const arrProp = Object.keys(json.data);
console.log(arrProp);

// Declaro un objeto vacío que será el resultado
let objResult = {};

// se realizará las iteraciones del arreglo obtenido para construir el Objeto Resultado
arrProp.forEach((nombreProp) => {
// visualicemos los nombres
  console.log(nombreProp);
// usando el nombreProp como argumento y con el uso de los valores de id declaremos dos variables donde se alojarán los datos del valor Over y del valor Under 
  let valorOver = json.data[nombreProp].over_carrier_service_id;
  let valorUnder = json.data[nombreProp].under_carrier_service_id;
// visualicemos el valor de Over de cada uno
  console.log(valorOver);
// visualicemos el valor de Under de cada uno
  console.log(valorUnder);
// Usamos el Json values para obtener carrier y service
  console.log('Over');
  console.log(values[valorOver]);
  console.log('Under');
  console.log(values[valorUnder]);
  //construimos el objeto resultado
  objResult[nombreProp] = {
    limit: json.data[nombreProp].limit,
    over: values[valorOver],
    under: values[valorUnder]
  };
});

// console.log('como queda el objeto Resultado');
console.log(objResult);

this.Json1 = objResult
  }
},
mounted(){
  this.JSON()
}
}
</script>
