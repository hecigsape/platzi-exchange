import Vue from "vue"; //importa la libreia (libreia si no tiene . o / )
import App from "./App.vue"; //importa el componente app
import "@/assets/css/tailwind.css" //el @ hace referenca al directorio source 
Vue.config.productionTip = false;

//instancia de vue
new Vue({
  render: (h) => h(App), //remplaza la instancia o el seteo de la app dentro del componete
}).$mount("#app"); //tiene le mismo proposito del elemento el
