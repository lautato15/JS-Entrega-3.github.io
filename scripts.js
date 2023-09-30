const pokemons = [];
let interfaceClear = true;
const body = document.getElementById("body");
const labelFlexSwitch = document.getElementById("labelFlexSwitch");
const formFlexSwitch = document.getElementById("formFlexSwitch");
const row = document.getElementById("pokeCards");
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

// LLAMADA HTTP CON AXIOS ♦
const getPokemons = async (max) => {
  for (let i = 1; i < max; i++) {
    const response = await axios({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${i}`,
    });
    response.data.type = response.data.types[0].type.name;
    pokemons.push(response.data);
  }
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

    document
      .querySelector(`#card${pokemon.id}`)
      .addEventListener("click", function () {
        selectPokemon(pokemon.id);
      });
  }
};
getPokemons(300);

// EVENTOS ♦
// Seleccionador
function selectPokemon(id) {
  // LOCAL STORAGE  Y JSON ♦
  localStorage.setItem("pokemon", JSON.stringify(pokemons[id]));

  body.classList.add("showPokemon");
  formFlexSwitch.classList.add("d-none");
  console.log("Seleccionaste el Personaje:" + pokemons[id].name);
  window.location.href = "/pokedex.html";
}
