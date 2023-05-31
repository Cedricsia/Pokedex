import PropTypes from "prop-types";
function PokemonCard({ name, img }) {
  //prettier-ignore
  return (
      <figure>
        {img === undefined ? <p>???</p> : <img src={img} alt={name} />}
        <figcaption>{name}</figcaption>
      </figure>
    );
}
export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
};
