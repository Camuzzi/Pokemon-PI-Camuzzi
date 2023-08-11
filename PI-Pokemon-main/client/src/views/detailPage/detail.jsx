import "./detail.styles.css";

import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
//import { useNavigate } from "react-router-dom";
import hpImg from "../../assets/HP.png";
import atcImg from "../../assets/ATTACK.png";
import defImg from "../../assets/DEFENSE.png";
import spdImg from "../../assets/SPEED.png";
import extImg from "../../assets/extras.png";
import pkb1Img from "../../assets/pokeball1.png";
import pkb2Img from "../../assets/pokeball2.png";

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
    <div className="detail-container">
      <div className="left-column">
        <h5 className="id-overlay">Id: {pokemon.id}</h5>
        <img src={pokemon.image} alt="img" className="pokemon-image"/>
      </div>


      <div className="right-column">
        <h1>{pokemon.name}</h1>

          
          <div className="details-container">

            <div className="stats-container">
              <h3>Principal stats: </h3>
              <div className="stat">
                <img src={hpImg} alt="hp" />
                <h4>HP: {pokemon.hp}</h4>
              </div>

              <div className="stat">
                <img src={atcImg} alt="hp" />
                <h4>ATTACK: {pokemon.attack}</h4>
              </div>

              <div className="stat">
                <img src={defImg} alt="hp" />
                <h4>DEFENSE: {pokemon.defense}</h4>
              </div>

              <h3>Secondary stats: </h3>
              {pokemon.speed && 
                <div className="stat">
                <img src={spdImg} alt="hp" />
                <h4>SPEED: {pokemon.speed}</h4>
              </div>}
              {pokemon.height && 
                <div className="stat">
                <img src={extImg} alt="hp" />
                <h4>HEIGHT: {pokemon.height}</h4>
              </div>}
              {pokemon.weight && 
                <div className="stat">
                <img src={extImg} alt="hp" />
                <h4>WEIGHT: {pokemon.weight}</h4>
              </div>}

            </div>

              <div className="types-container">
                <h3>Types: </h3>
                {pokemon.Types?.map((type,index) => (
                  <div className="stat">
                  <img src={pkb1Img} alt="hp" width="30"/>
                  <h4 key={index}>Type {index + 1}: {type.name || type}</h4>
                </div>   
                ))}
              </div>

          </div>
          

      </div>


    </div>
  );
}

export default Detail;