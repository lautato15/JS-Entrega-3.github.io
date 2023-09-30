import pokemons from "./pokemons.js";
let interfaceClear = true;
const body = document.getElementById("body");
const labelFlexSwitch = document.getElementById("labelFlexSwitch");
const formFlexSwitch = document.getElementById("formFlexSwitch");

console.log(pokemons);
function switchInterface(interfaceClear) {
  if (!interfaceClear) {
    body.classList.remove("bg-primary-subtle");
    body.classList.add("bg-dark");
    labelFlexSwitch.textContent = "Active Clear Mode";
    labelFlexSwitch.classList.add("text-white");
    labelFlexSwitch.classList.remove("text-dark");
  } else {
    body.classList.remove("bg-dark");
    body.classList.add("bg-primary-subtle");
    labelFlexSwitch.textContent = "Active Dark Mode";
    labelFlexSwitch.classList.add("text-dark");
    labelFlexSwitch.classList.remove("text-white");
  }
}
document.querySelector(`#flexSwitch`).addEventListener("click", function () {
  if (interfaceClear) interfaceClear = false;
  else interfaceClear = true;
  switchInterface(interfaceClear);
});
// Cargado de Datos
for (let pokemon of pokemons) {
  // Creando la Col de Boostrap
  const col = document.createElement("div");
  col.id = "col-" + (pokemon.id + 1);
  col.classList.add(
    "col-6",
    "col-md-4",
    "mt-lg-3",
    "justify-content-center",
    "d-flex"
  );
  const row = document.getElementById("pokedex");
  row.appendChild(col);
  // Creando mi Card Pokemon
  const card = document.createElement("div");
  card.id = "card" + (pokemon.id + 1);
  card.classList.add(
    "my-card",
    "mb-2",
    "text-center",
    "rounded-5",
    "shadow",
    "py-2",
    `${pokemon.bgColor}`
  );
  card.innerHTML = "<h4></h4><h5></h5><img/><p></p>";
  const realCol = document.getElementById(`col-${pokemon.id + 1}`);
  realCol.appendChild(card);
  // Llenando mis Cards Pokemons
  const num = card.querySelector("h4");
  num.textContent = pokemon.id + 1;
  const name = card.querySelector("h5");
  name.textContent = pokemon.name;
  const img = card.querySelector("img");
  img.src = pokemon.image;
  const type = card.querySelector("p");
  type.textContent = pokemon.type.toLocaleUpperCase();
}
// Seleccionador
for (let pokemon of pokemons) {
  document
    .querySelector(`#card${pokemon.id + 1}`)
    .addEventListener("click", function () {
      selectPokemon(pokemon.id);
    });
}
function selectPokemon(id) {
  body.classList.add("showPokemon");
  formFlexSwitch.classList.add("d-none");
  console.log("Seleccionaste el Personaje:" + pokemons[id].name);
  const pokedex = document.getElementById(`pokedex`);
  pokedex.innerHTML = `<div id="colShow1"></div><div id="colShow2"></div>`;
  const colShow1 = document.getElementById("colShow1");
  const colShow2 = document.getElementById("colShow2");
  // Creacion del Layout
  colShow1.classList.add(
    "col-12",
    "col-md-6",
    "mt-3",
    "justify-content-center",
    "align-items-center",
    "d-flex"
  );
  colShow2.classList.add("col-12", "col-md-6");
  colShow1.innerHTML = "<img/>";
  const img = colShow1.querySelector("img");
  img.src = "./assets/img/pokedex.png";
  img.style = "width: 300px; height: 300px;";

  colShow2.innerHTML = `
  <div class=" px-2 border border-black rounded-3 bg-success-subtle mb-2 title">
            <h2 class="m-0"
              >POKEDEX!
              </h2
            >
  </div>
  <div class="mt-3 border border-black border-2 rounded-bottom-5 p-5 bg-secondary-subtle">
    <p class="m-0 text-danger">&#920 &#920</p>
    <div id="content" class="border border-black border-2 row ${pokemons[id].bgColor}">
        <div class="col-12  col-md-6 d-flex justify-content-center align-items-center"> 
            <img 
                src="${pokemons[id].image}"
                class="w-75 img-fluid" alt="">
        </div>
        <div class="col-12 col-md-6 text-start">
            <p class="m-0 fs-5"><strong>Name:</strong> ${pokemons[id].name}</p>
            <p class="m-0"><strong>Type:</strong> ${pokemons[id].type}</p>
            <p class="m-0"><strong>Description:</strong>${pokemons[id].description}</p>
            <p class="m-0"><strong>Weight:</strong> ${pokemons[id].weight}</p>
            <p class="m-0"><strong>Height:</strong>  ${pokemons[id].height}</p>
        </div>
      </div>
      <p class="d-flex fs-1 text-black m-0">
        <span class="me-auto r">
          <a class="text-decoration-none text-danger" href="./"> 
            &#920
          </a>
          <span class="ms-1" style="font-size: 0.8rem;"><---- Boton al Home</span> 
        </span> &#926
      </p>
  </div>
`;
}
