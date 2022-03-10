<template>
  <main>
    <px-header />
    <!--el componenete router-view permite remplazar el contenido de cada ruta 
        
-->
    <router-view class="container px-5 sm:px-20 flex_justify-center" />
    <home />
  </main>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";

export default {
  name: "App", //este nombre permite hacer un dbug mas facil
  components: { PxHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
