const pokemons = [
  {
    id: 0,
    name: "Pikachu",
    type: "electric",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    bgColor: "bg-warning",
    description: "Pikachu is an Electric-type Pokémon...",
    weaknesses: ["Ground"],
    weight: "6.0 kg",
    height: "0.4 m",
  },
  {
    id: 1,
    name: "Charizard",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    bgColor: "bg-danger",
    description: "Charizard is a Fire/Flying-type Pokémon...",
    weaknesses: ["Water", "Electric", "Rock"],
    weight: "90.5 kg",
    height: "1.7 m",
  },
  {
    id: 2,
    name: "Wartortle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    bgColor: "bg-info",
    description: "Wartortle is a Water-type Pokémon...",
    weaknesses: ["Electric", "Grass"],
    weight: "22.5 kg",
    height: "1.0 m",
  },
  {
    id: 3,
    name: "Ivysaur",
    type: "grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    bgColor: "bg-success",
    description: "Ivysaur is a Grass/Poison-type Pokémon...",
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    weight: "13.0 kg",
    height: "1.0 m",
  },
  {
    id: 4,
    name: "Dragonite",
    type: "Dragon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    bgColor: "bg-warning-subtle",
    description: "Dragonite is a Dragon/Flying-type Pokémon...",
    weaknesses: ["Ice", "Rock", "Dragon", "Fairy"],
    weight: "210.0 kg",
    height: "2.2 m",
  },
];

export default pokemons;
