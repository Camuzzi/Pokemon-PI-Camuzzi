import "./searchBar.styles.css";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../assets/Pokemon-Logo-Transparent-Image.png";

function SearchBar({handleSearch}) {

    const pokeballImage = "https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
    
    
    const location = useLocation();

    const [searchValue,setSearchValue] = useState("");

    const handleChange = (e) => {
        console.log("Search string:", e.target.value);
        setSearchValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
    }

    return(
        <div className="search-bar">


            {(location.pathname === "/home") && (
            <div className="logo">
                <img src={pokeballImage} alt="pokeball" width="30" />
            </div>
            )}
            
            {(location.pathname === "/home") && (
            <div className="search-form">
                <form>
                    <input className="search-input" type="text" placeholder="Search by name..." value={searchValue} onChange={handleChange}/>
                    <button className="search-button" onClick={handleClick}>SEARCH</button>
                </form>
            </div>
            )}

            <div className="center-image">
                <img src={logoImage} alt="logo" />
            </div>
            
            <div className="nav-links">
            <Link to="/home">
                <p>HOME</p>
            </Link>

            <Link to="/form">
                <p>CREATE YOUR POKEMON!</p>
            </Link>
            </div>

            {/* <Link to="/about">
                <p>ABOUT</p>
            </Link> */}



        </div>
    );
}

export default SearchBar;