import "./card.styles.css";

import { useNavigate } from "react-router-dom";

function Card({pokemon}){
    const {image,name,type,Types} = pokemon;
    const navigate = useNavigate();

    function navigateHandler(){
        navigate(`/detail/${pokemon.id}`);
    }

    return (
        <div>
            <h2 onClick={navigateHandler}>{name}</h2>
            <img src={image} alt="pokemon image" />
            {/* {type?.map((type,key) => {
                return <h3 key={key}>{type}</h3>
            })} */}
            {Types?.map((type,key) => {
                return <h3 key={key}>{type.name || type}</h3>
            })}
        </div>
    );
}

export default Card;