import "./card.styles.css";

function Card({pokemon}){
    const {id,image,name,type} = pokemon;

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt="pokemon image" />
            {/* <h1>{types}</h1> */}
            {type?.map((type,key) => {
                return <h3 key={key}>{type}</h3>
            })}
        </div>
    );
}

export default Card;