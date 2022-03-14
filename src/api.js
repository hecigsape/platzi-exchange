//import { getMetadataKeys } from "core-js/fn/reflect";

const url = "https://api.coincap.io/v2";

function getAssets() {
  //hace fecht entre la url principal y assets, adema se limita a 20 critos
  return fetch(`${url}/assets?limit=30`)
    .then((res) => res.json())
    .then((res) => res.data);
}

//permite ver el detalle de las criptos
function getAsset(coin) {
  //hace fecht entre la url principal y assets, adema se limita a 20 critos
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

//obtiene el histroial de pprecios
function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}
export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
