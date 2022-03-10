const url = "https://api.coincap.io/v2";

function getAssets() {
  //hace fecht entre la url principal y assets, adema se limita a 20 critos
  return fetch(`${url}/assets?limit=30`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default { getAssets };
