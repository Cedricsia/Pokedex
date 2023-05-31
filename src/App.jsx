import "./PokemonCard";
import "./App.css";
import PokemonCard from "./PokemonCard";
import { useState } from "react";

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
  const clickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const clickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const pokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <PokemonCard name={pokemon.name} img={pokemon.imgSrc} />
      {pokemonIndex > 0 && <button onClick={clickPrev}>Pécédent</button>}
      {pokemonIndex < 4 && <button onClick={clickNext}>Suivant</button>}
    </div>
  );
}
export default App;
