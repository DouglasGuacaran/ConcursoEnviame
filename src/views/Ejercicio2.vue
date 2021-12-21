<template>
  <b-container class="ejercicio2">
    <b-row>
      <b-col>
        <h1>Ejercicio 2</h1>
      </b-col>
    </b-row>
    <b-row class="resultado">
      <b-col sm="10" md="7" lg="4">
        <span class="text">{{ JSON.stringify(Json1) }} </span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: "Ejercicio2",
  data() {
    return {
      Json1: "",
    };
  },
  components: {
  },
  methods: {
    JSON() {
      let values = {
        1: {
          carrier: "CCH",
          service: "DEX",
        },
        17: {
          carrier: "CHP",
          service: "express",
        },
      };

      let json = {
        data: {
          BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17,
          },
          LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1,
          },
          LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1,
          },
          LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17,
          },
        },
      };

      const arrProp = Object.keys(json.data);

      let objResult = {};

      arrProp.forEach((nombreProp) => {
        let valorOver = json.data[nombreProp].over_carrier_service_id;
        let valorUnder = json.data[nombreProp].under_carrier_service_id;
        objResult[nombreProp] = {
          limit: json.data[nombreProp].limit,
          over: values[valorOver],
          under: values[valorUnder],
        };
      });

      this.Json1 = objResult;
    },
  },
  mounted() {
    this.JSON();
  },
};
</script>
