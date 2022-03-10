<template>
  <div id="app" class="bg-blue-40">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"; //importamos el componente

export default {
  name: "App", //este nombre permite hacer un dbug mas facil
  components: {
    HelloWorld, //declaramos el componente para poderlo usar en el template (ver linea 4)
  },
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
