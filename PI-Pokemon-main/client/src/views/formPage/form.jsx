import "./form.styles.css";

import { useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import { createPoke,getTypes,getPokemons } from "../../redux/actions/indexActions";

import validate from "./validate";

function Form() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokeTypes = useSelector((state) => state.allTypes);

  const [input,setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: []
  });

  const [errors,setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    type: []
  });

  const [isType2Enabled,setIsType2Enabled] = useState(false);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();

    if (e.target.name === "height" || e.target.name === "weight"){
      setInput({
        ...input,
        [e.target.name]: e.target.value 
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value 
      });
  
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value 
        })
      )
    }
    
  }

  function handleChangeImage(e) {
    let regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    if (!regexImage.test(e.target.value)){
      setErrors({
        ...errors,
        image: "Please enter a valid url"
      })
    } else {
      setErrors({...errors,image:""})
    }

    setInput({
      ...input,
      image: e.target.value
    })

  }

  function handleChangeNumber(e) {
   
    if(e.target.value > 300 || e.target.value < 0){
      setErrors({
        ...errors,
        [e.target.name]: "Value has to be between 1 and 200" 
      })
    } else {
      setErrors({
        ...errors,
        [e.target.name]: ""
      })

      setInput({
        ...input,
        [e.target.name]: e.target.value 
      })
    }
  }

  function handleChangeTypes(e){
    if (e.target.name === "firstType"){
      setInput({
        ...input,
        type: [e.target.value]
      });
    } else if (e.target.name === "secondType"){
      setInput({
        ...input,
        type: [...input.type,e.target.value]
      })
    }
  }

  function sumbitHandler(e){
    e.preventDefault();

    if (input.name === "" || input.image === "" || input.hp === "" || input.attack === "" || input.defense === "" || input.type.length === 0) {
      alert('You have to complete mandatory fields!!');
      return;
    } else {
      dispatch(createPoke(input));
      alert("Pokemon created successfully!!!");
      setInput({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: []
      });
    }

    dispatch(getPokemons());
    navigate("/home");

  }

  
  return (
    <div >
      <form onSubmit={(event) => sumbitHandler(event)}>

        <label>Name: </label>
        <input 
          placeholder="Pokemon name..."
          type="text"
          name="name"
          value={input.name}
          onChange={(event) => handleChange(event)}
        />
        {errors.name  && <p>{errors.name}</p>}

        <label>Image: </label>
        <input 
          type="text"
          name="image"
          placeholder="Url link jpg or png"
          value={input.image}
          onChange={(event) => handleChangeImage(event)}
        />
        {errors.image  && <p>{errors.image}</p>}

        <label>HP: </label>
        <input
          type="number"
          name="hp"
          placeholder="hp..."
          value={input.hp}
          onChange={(event) => handleChangeNumber(event)}
        /> 
        {errors.hp  && <p>{errors.hp}</p>}

        <label>Attack: </label>
        <input 
           type="number"
           name="attack"
           placeholder="attack..."
           value={input.attack}
           onChange={(event) => handleChangeNumber(event)}
         /> 
         {errors.attack && <p>{errors.attack}</p>}

        <label>Defense: </label>
        <input 
           type="number"
           name="defense"
           placeholder="defense..."
           value={input.defense}
           onChange={(event) => handleChangeNumber(event)}
         /> 
         {errors.defense && <p>{errors.defense}</p>}

        <label>Speed: </label>
        <input 
           type="number"
           name="speed"
           placeholder="speed..."
           value={input.speed}
           onChange={(event) => handleChangeNumber(event)}
         /> 
         {errors.speed && <p>{errors.speed}</p>}

        <label>Height: </label>
        <input 
          placeholder="Height"
          type="number"
          name="height"
          value={input.height}
          onChange={(event) => handleChange(event)}
        />

        <label>Weight: </label>
        <input 
          placeholder="Weight"
          type="number"
          name="weight"
          value={input.weight}
          onChange={(event) => handleChange(event)}
        />

        <label>First Type: </label>
        <select
          name="firstType"
          onChange={(event) => handleChangeTypes(event)}
        >
          {pokeTypes?.map((type) => {
            return (
              <option key={type.name} value={type.id}>
                {type.name}
              </option>
            );
          })}
        </select>

        <label>Second Type: </label>
        <input
          type="checkbox"
          onChange={(event) => setIsType2Enabled(event.target.checked)}
        />
        <select
          name="secondType"
          disabled={!isType2Enabled}
          onChange={(event) => handleChangeTypes(event)}
        >
          {pokeTypes?.map((type) => {
            return (
              <option key={type.name} value={type.id}>
                {type.name}
              </option>
            );
          })}
        </select>
        
        <button
          type="sumbit"
        >
          CREATE POKEMON
        </button>

      </form>
    </div>
  );
}

export default Form;