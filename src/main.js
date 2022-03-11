import Vue from "vue"; //importa la libreia (libreia si no tiene . o / )
import App from "./App.vue"; //importa el componente app
import "./assets/css/tailwind.css"; //el @ hace referenca al directorio source
import router from "@/router";
/*la forma de importar la libreria depende de como 
se creo la libreria es necesario ver la docuemntacion */
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js";
import { dollarFilter, percentFilter } from "@/filters"; //permite importar el filtro

Vue.filter("dolar", dollarFilter); //permite usar el filtro
Vue.filter("percent", percentFilter); //permite usar el filtro
Vue.config.productionTip = false;
Vue.use(VueSpinners); //le dice a vue que use la libreria
Vue.use(Chartick.use(Chart)); //le dice a vue que use la libreria
//instancia de vue
new Vue({
  router: router,
  render: (h) => h(App), //remplaza la instancia o el seteo de la app dentro del componete
}).$mount("#app"); //tiene le mismo proposito del elemento el
