const pokemons = [];
let interfaceClear = true;
const body = document.getElementById("body");
const counter = document.querySelector("#counter");
const label = document.querySelector("#instructions1");
const pokeball = document.querySelector("#pokeball-img");
const ploading = document.querySelector("#p-loading");
const row = document.getElementById("pokeCards");
const btnCounter = document.querySelector("#btnCounter");

document.querySelector(`#btnCounter`).addEventListener("click", function () {
  if (Number(counter.value) > 0 && Number(counter.value) < 1018) {
    ploading.textContent = "Cargando ...";
    pokeball.setAttribute("src", "./assets/img/pokeball.gif");
    pokeball.classList.add("mt-5", "pt-2");
    label.classList.add("d-none");
    getPokemons(Number(counter.value));
  } else {
    label.textContent =
      "Numero incorrecto, debes ingresar un numero entre el 1 y el 1017";
  }
});
// LLAMADA HTTP CON AXIOS ♦
const getPokemons = async (max) => {
  for (let i = 1; i < max + 1; i++) {
    const response = await axios({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${i}`,
    });
    response.data.type = response.data.types[0].type.name;
    pokemons.push(response.data);
  }
  counter.classList.add("d-none");
  btnCounter.classList.add("d-none");
  // MANIPULACION DEL DOM ♦
  // Cargado de Datos
  // Crear el Layout y las Cards
  row.innerHTML = "";
  for (let pokemon of pokemons) {
    // Creando la Col de Boostrap
    const col = document.createElement("div");
    col.id = "col-" + pokemon.id;
    col.classList.add(
      "col-6",
      "col-md-4",
      "mt-lg-3",
      "justify-content-center",
      "d-flex"
    );
    row.appendChild(col);
    // Creando mi Card Pokemon
    const card = document.createElement("div");
    card.id = "card" + pokemon.id;
    card.classList.add(
      "my-card",
      "mb-2",
      "text-center",
      "rounded-5",
      "shadow",
      "py-2",
      `${pokemon.type}`
    );
    card.innerHTML = "<h4></h4><h5></h5><img/><p></p>";
    const realCol = document.getElementById(`col-${pokemon.id}`);
    realCol.appendChild(card);
    // Llenando mis Cards Pokemons
    const num = card.querySelector("h4");
    num.textContent = pokemon.id;
    const name = card.querySelector("h5");
    name.textContent = pokemon.name.toUpperCase();
    const img = card.querySelector("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;
    const type = card.querySelector("p");
    type.textContent = pokemon.type.toLocaleUpperCase();

    // EVENTOS ♦
    document
      .querySelector(`#card${pokemon.id}`)
      .addEventListener("click", function () {
        selectPokemon(pokemon.id);
      });
  }
  // MANIPULACION DE ARRAY (REDUCE) ♦
  // Haremos un nuevo array con Reduce que obtenga la cantidad de Pokemons que hay por tipo de pokemon
  const countTypes = pokemons.reduce((acumulador, pokemon) => {
    if (!acumulador[pokemon.type]) {
      acumulador[pokemon.type] = 1;
    } else {
      acumulador[pokemon.type]++;
    }
    return acumulador;
  }, {});
  const dropdown = document.querySelector("#btnDropdown");
  dropdown.removeAttribute("disabled");
  for (const clave in countTypes) {
    const ul = document.getElementById(`reduceUl`);
    const li = document.createElement("li");
    li.id = clave;
    li.classList.add("dropdown-item", "d-flex", "fw-bold");
    li.textContent = clave.toUpperCase();
    const span = document.createElement("span");
    span.textContent = countTypes[clave];
    span.classList.add("ms-auto", "badge", "bg-danger", "rounded-pill");
    li.appendChild(span);
    ul.appendChild(li);
  }
};


function selectPokemon(id) {
  // LOCAL STORAGE  Y JSON ♦
  // Guardamos nuestro preciado Pokemon en su Pokeball (Storage)
  sessionStorage.setItem("pokemon", JSON.stringify(pokemons[id - 1]));
  body.classList.add("showPokemon");
  window.location.href = "./pokedex.html";
}
