import "./card.styles.css";

import { useNavigate } from "react-router-dom";

function Card({pokemon}){
    const {image,name,Types} = pokemon;
    const navigate = useNavigate();

    function navigateHandler(){
        navigate(`/detail/${pokemon.id}`);
    }

    return (
        <div className="card" onClick={navigateHandler}>
            <h2 >{name}</h2>
            <img src={image} alt="pokemon img" />

            <div>
            <h3>Types:</h3>
            {Types?.map((type,key) => {
                return <h4 key={key}>{type.name || type}</h4>
            })}
            </div>
            
        </div>
    );
}

export default Card;