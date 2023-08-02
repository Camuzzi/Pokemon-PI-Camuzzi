import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState } from "react";
import { getPokemons,getByName,getTypes,filterByType,dataFilter,alphaFilter } from "../../redux/actions/indexActions";

import "./home.styles.css";

import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/cards";

function Home() {

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemonsByName = useSelector((state) => state.pokemonsByName);
  const allTypes = useSelector((state) => state.allTypes);

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

  //* FILTERS *\\

    //----- filter by type -----\\

    const findByType = (e) => {
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
    }

    const findByData = (e) => {
      dispatch(dataFilter(e.target.value));
      setCurrentPage(1);
    }

    const findByOrder = (e) => {
      dispatch(alphaFilter(e.target.value));
      setCurrentPage(1);
    }

  //* END FILTERS *\\

  return (
    <div >

      <SearchBar handleChange={handleChange} handleClick={handleClick}/>

      <div> {/* filters */}


        {/* filter of pokemons by db or api */}
        <span>Search on:</span>
        <select onChange={findByData}>
          <option value="all">All</option>
          <option value="db">My Pokemons</option>
          <option value="api">From Api</option>
        </select>

        {/* filter of pokemons by type */}

        <span>Type of Pokemon:</span>
        <select onChange={findByType}>
          <option value="all">All Types</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Normal</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
        </select>

        {/* filter of pokemons by order and attack */}

        <span>Order of Pokemons:</span>
        <select onChange={findByOrder}>
          <option value="all">Reset</option>
          <option value="asc">Ascendant</option>
          <option value="dsc">Descendant</option>
          <option value="atc">Attack</option>
        </select>


      </div>

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