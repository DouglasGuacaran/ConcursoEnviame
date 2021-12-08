<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><router-link to="/">Examen de Douglas Guacarán </router-link> </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item> <router-link to="/ejercicio1">Ejercicio 1</router-link> </b-nav-item>
          <b-nav-item> <router-link to="/ejercicio2">Ejercicio 2</router-link> </b-nav-item>
          <b-nav-item> <router-link to="/ejercicio3">Ejercicio 3</router-link> </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app > nav > a > a { 
  color: black;
  text-decoration: none;
  margin-left: 10px ;
}
#nav-collapse > ul > li > a > a {
  color: chocolate ;
  text-decoration: none;
}

</style>
