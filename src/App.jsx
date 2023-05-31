import "./PokemonCard";
import "./App.css";
import PokemonCard from "./PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
const pokemon = pokemonList[0];
function App() {
  return <PokemonCard pokemon={pokemon} />;
}
export default App;
