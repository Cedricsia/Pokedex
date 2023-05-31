function NavBar({ pokemonIndex, clickNext, clickPrev }) {
  return (
    <div id="Navbar">
      {pokemonIndex > 0 && <button onClick={clickPrev}>Pécédent</button>}
      {pokemonIndex < 4 && <button onClick={clickNext}>Suivant</button>}
    </div>
  );
}

export default NavBar;
