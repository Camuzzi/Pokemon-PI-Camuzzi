import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState } from "react";
import { getPokemons,getByName,getTypes,filterByType,dataFilter,alphaFilter,resetPokeFilters } from "../../redux/actions/indexActions";

import "./home.styles.css";

import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/cards";

function Home() {

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);
  //const pokeByName = useSelector((state) => state.pokemonsByName);
  const allTypes = useSelector((state) => state.allTypes);
  const [searchResultsFound, setSearchResultsFound] = useState(true);
  const [searchString,setSearchString] = useState("");
  const [filteredPokemons,setFilteredPokemons] = useState("");
  
  const [selectedFilters, setSelectedFilters] = useState({
    data: "all",
    type: "all",
    alpha: "reset"
  });
  
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
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

    const handleSearch =  async (searchValue) => {
      const toLowPoke = searchValue.toLowerCase().trim();
      
      try {
        if (searchValue) {
          const searchResults = (await dispatch(getByName(toLowPoke))).payload;
    
          if (searchResults.length === 0) {
            setFilteredPokemons([]);
            setSearchResultsFound(false);
            alert(`No se encontraron resultados para '${toLowPoke}'`);
          } else {
            setFilteredPokemons(searchResults);
            setSearchString(toLowPoke);
            setCurrentPage(1);
            setSearchResultsFound(true);
          }
        } else {
          setFilteredPokemons(allPokemons);
          setSearchResultsFound(true);
        }
      } catch (error) {
        
        setFilteredPokemons([]);
        setSearchString("");
        setCurrentPage(1);
        setSearchResultsFound(true);

        console.error("Error fetching data:", error);

        alert("There is an error with the input, please try again");
      }
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

    const resetFilters = () => {
      setSelectedFilters({
        data: "all",
        type: "all",
        alpha: "reset"
      });
      setFilteredPokemons("");
      dispatch(resetPokeFilters());
      dispatch(filterByType("all"));
      dispatch(dataFilter("all"));
      dispatch(alphaFilter("reset"));
      setCurrentPage(1);
    }

  //* END FILTERS *\\

  return (
    <div >

      <SearchBar  handleSearch={handleSearch}/>

      <div className="filter-container"> {/* filters */}


        {/* filter of pokemons by db or api */}
        <span className="filter-span">Search on:</span>
        <select className="filter-button" onChange={(e) => {setSelectedFilters({...selectedFilters,data:e.target.value});findByData(e);}} value={selectedFilters.data}>
          <option value="all">All</option>
          <option value="db">My Pokemons</option>
          <option value="api">From Api</option>
        </select>

        {/* filter of pokemons by type */}

        <span className="filter-span">Type of Pokemon:</span>
        <select className="filter-button" onChange={(e) => {
          setSelectedFilters({...selectedFilters,type:e.target.value});findByType(e)
        }} value={selectedFilters.type}>
          <option value="all">All Types</option>
          {allTypes.map((type) => (
            <option value={type.name} key={type.id}>{type.name}</option>
          ))}
        </select>

        {/* filter of pokemons by order and attack */}

        <span className="filter-span">Order of Pokemons:</span>
        <select className="filter-button" onChange={(e) => {
          setSelectedFilters({...selectedFilters,alpha:e.target.value});findByOrder(e)
        }} value={selectedFilters.alpha}>
          <option value="reset">Reset</option>
          <option value="asc">Ascendant</option>
          <option value="dsc">Descendant</option>
          <option value="atc">Attack</option>
        </select>

        <button className="filter-button" onClick={resetFilters}>RESET FILTERS</button>

      </div>

      <div>
        <Cards pokemons={(!searchString) ? currentPokemons : filteredPokemons}/>
      </div>
      
      <div className="pagination-container">
          <button className="pagination-button" onClick={prevPageHandler}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button className="pagination-button" onClick={nextPageHandler}>
            Next
          </button>
      </div>

    </div>
  );
}

export default Home;