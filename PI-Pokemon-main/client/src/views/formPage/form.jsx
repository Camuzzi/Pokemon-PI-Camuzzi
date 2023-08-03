import "./form.styles.css";

import { useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import { createPoke,getTypes,getPokemons } from "../../redux/actions/indexActions";

import validate from "./validate";

function Form() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokeTypes = useSelector((state) => state.getTypes);

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
    speed: "",
    height: "",
    weight: "",
    type: []
  });

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();

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

  function handleChangeImage(e) {
    let regexImage = /[.jpg|.png]$/g;
    if (!regexImage.test(e.target.value)){
      setErrors({
        ...input,
        image: "Please enter a valid url"
      })
    } else {
      setErrors({...errors})
    }

    setInput({
      ...input,
      image: e.target.value
    })

  }

  // function handleChangeRange(e) {

  //   const currentValue = parseInt(e.target.value);
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value 
  //   })
  // }

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

  
  return (
    <div >
      <form>

        <label>Name: </label>
        <input 
          placeholder="Pokemon name..."
          type="text"
          name="name"
          value={input.name}
          onChange={(event) => handleChange(event)}
        />

        <label>Image: </label>
        <input 
          type="text"
          name="image"
          placeholder="Url link jpg or png"
          value={input.image}
          onChange={(event) => handleChangeImage(event)}
        />

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
        
        {/* <label>Types: </label>
        <input 
          placeholder="Pokemon name..."
          type="text"
          name="name"
          value={input.name}
          onChange={}
        /> */}

      </form>
    </div>
  );
}

export default Form;