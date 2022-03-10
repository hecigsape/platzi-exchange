import Vue from "vue"; //importa la libreia
import App from "./App.vue";  //importa el componente app

Vue.config.productionTip = false; 

//instancia de vue 
new Vue({
  render: (h) => h(App), //remplaza la instancia o el seteo de la app dentro del componete
}).$mount("#app"); //tiene le mismo proposito del elemento el
