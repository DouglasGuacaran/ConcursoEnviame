<template>
  <div class="row">
    <div class="col">
      <b-card title="Data">
        <b-card-text> Localidad: {{ localidad }} </b-card-text>
        <b-card-text> Zona: {{ limit }} </b-card-text>
        <b-card-text> Carrier: {{ carrier }} </b-card-text>

        <b-card-text> Tipo de Servicio: {{ service }} </b-card-text>

      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    localidad: String,
    limit: String,
    carrier: String,
    service: String,
  },
};
</script>

<style></style>
