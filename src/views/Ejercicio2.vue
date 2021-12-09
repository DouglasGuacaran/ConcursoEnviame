<template>
  <div class="ejercicio2">
    <h1>Ejercicio 2</h1>
    <div class="col-2 m-3"><span>{{Json1}}</span></div>

  </div>
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

console.log('json 1');
console.log(values);
console.log('-----------');
console.log('json 2');
console.log(json);
console.log('---------RESULTADO---------');
console.log(json.data);
const arrProp = Object.keys(json.data);
console.log('-----arreglo de props-----');
console.log(arrProp);
let objResult = {};
console.log('ITERANDO');
arrProp.forEach((nombreProp) => {
  console.log('prop');
  console.log(nombreProp);
  let valorOver = json.data[nombreProp].over_carrier_service_id;
  let valorUnder = json.data[nombreProp].under_carrier_service_id;
  console.log('data que vamos sacando de json');
  console.log('over_carrier_service_id:');
  console.log(valorOver);
  console.log('under_carrier_service_id:');
  console.log(valorUnder);

  console.log('valores que vamos a meter');
  console.log('Over');
  console.log(values[valorOver]);
  console.log('Under');
  console.log(values[valorUnder]);
  objResult[nombreProp] = {
    limit: json.data[nombreProp].limit,
    over: values[valorOver],
    under: values[valorUnder]
  };
});

console.log('como queda objResult');
console.log(objResult);

this.Json1 = objResult
  }
},
mounted(){
  this.JSON()
}
}
</script>
