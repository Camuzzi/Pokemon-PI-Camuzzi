import "./searchBar.styles.css";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

function SearchBar({handleChange,handleClick}) {
    const location = useLocation();

    return(
        <div>
            <h2>POKEMON APP</h2>

            <Link to="/home">
                <p>HOME</p>
            </Link>

            <Link to="/form">
                <p>CREATE YOUR POKEMON!</p>
            </Link>

            {/* <Link to="/about">
                <p>ABOUT</p>
            </Link> */}


            {/* <div>
                <form>
                    <input type="text" placeholder="Search by name..."  onChange={handleChange}/>
                    <button onClick={handleClick}>SEARCH</button>
                </form>
            </div> */}

            {(location.pathname === "/home") && (
                <div>
                <form>
                    <input type="text" placeholder="Search by name..."  onChange={handleChange}/>
                    <button onClick={handleClick}>SEARCH</button>
                </form>
            </div>
            )}

        </div>
    );
}

export default SearchBar;