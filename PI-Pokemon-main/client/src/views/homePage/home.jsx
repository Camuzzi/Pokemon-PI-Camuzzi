import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState } from "react";
import { getPokemons,getByName } from "../../redux/actions/indexActions";

import "./home.styles.css";

import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/cards";

function Home() {

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonsByName = useSelector((state) => state.pokemonsByName);

  const [searchString,setSearchString] = useState("");
  const [filteredPokemons,setFilteredPokemons] = useState(allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  //* PAGINATE *\\

  const [currentPage,setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const currentPokemons = [...allPokemons].slice(indexOfFirstPokemon,indexOfLastPokemon);

  const nextPageHandler = (e) => {
    e.preventDefault();
    const totalPokemons = allPokemons.length // 150
    const lastPage = Math.ceil(totalPokemons/pokemonsPerPage);
    const nextPage = currentPage + 1;

    if ( (currentPage) === lastPage ) return;

    setCurrentPage(nextPage);

  }

  const prevPageHandler = (e) => {
    e.preventDefault();
    const prevPage = currentPage - 1;
    if(prevPage === 0) return;
    setCurrentPage(prevPage);
  }

  //* END PAGINATE *\\

  //* SEARCH BY NAME *\\

    const handleChange = (e) => {
      setSearchString(e.target.value);
    }

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(getByName(searchString));
      setFilteredPokemons(pokemonsByName);
      setCurrentPage(1);
    }

  //* END SEARCH BY NAME *\\

  return (
    <div >
      <h2>POKEMON APP</h2>

      <SearchBar handleChange={handleChange} handleClick={handleClick}/>

      <div>
        <Cards pokemons={(!searchString) ? currentPokemons : filteredPokemons}/>
      </div>
      
      <div>
          <button onClick={prevPageHandler}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={nextPageHandler}>
            Next
          </button>
      </div>

    </div>
  );
}

export default Home;