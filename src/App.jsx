import "./PokemonCard";
import "./App.css";
import PokemonCard from "./PokemonCard";
import { useState } from "react";
import NavBar from "./navbar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];
  return (
    // prettier-ignore
    <div>
      <PokemonCard name={pokemon.name} img={pokemon.imgSrc} />
      <NavBar pokemonIndex={pokemonIndex}  pokemonList={pokemonList} setPokemonIndex={setPokemonIndex}  />
    </div>
  );
}
export default App;
