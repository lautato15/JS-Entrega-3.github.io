// JSON y STORAGE ♦
const pokemon = JSON.parse(sessionStorage.getItem("pokemon"));
console.log(pokemon);
// OPERADORES LÓGICOS AVANZADOS (AND) ♦
!pokemon && (window.location.href = "/notfound.html");

const img = document.querySelector("#imgPokedex");
img.setAttribute(
  "src",
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
);

liCreate("name");
liCreate("type");
liCreate("weight");
liCreate("height");

// FUNCIONES ♦
function liCreate(clave) {
  const pokedexUl = document.querySelector("#pokedexUl");
  const li = document.createElement("li");
  li.id = clave;
  li.classList.add("list-group-item", "list-group-item-primary", "text-start");
  typeof pokemon[clave] == "string" &&
    (pokemon[clave] = pokemon[clave].toUpperCase());
  li.textContent = clave.toUpperCase() + ": " + pokemon[clave];
  pokedexUl.appendChild(li);
}
