import "./detail.styles.css";

import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
//import { useNavigate } from "react-router-dom";

import { getDetail,cleanDetail } from "../../redux/actions/indexActions";

function Detail() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);
  //const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch,id]);

  console.log(pokemon.Types);

  return (
    <div >
      
      <h6>Id: {pokemon.id}</h6>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.image} alt="img" />

      <h5>Principal stats: </h5>
      <h4>HP: {pokemon.hp}</h4>
      <h4>ATTACK: {pokemon.attack}</h4>
      <h4>DEFENSE: {pokemon.defense}</h4>

      <h5>Secondary stats: </h5>
      {pokemon.speed && <h4>SPEED: {pokemon.speed}</h4>}
      {pokemon.height && <h4>HEIGHT: {pokemon.height}</h4>}
      {pokemon.weight && <h4>WEIGHT: {pokemon.weight}</h4>}

      <h5>Types: </h5>
      {pokemon.Types?.map((type,index) => (
        <h4 key={index}>Type {index + 1}: {type.name || type}</h4>
      ))}

    </div>
  );
}

export default Detail;