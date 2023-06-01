import { useState } from "react";
function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div id="Navbar">
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
      ))}
      {/* {pokemonIndex > 0 && <button onClick={clickPrev}>Pécédent</button>}
      {pokemonIndex < 4 && <button onClick={clickNext}>Suivant</button>} */}
    </div>
  );
}

export default NavBar;
