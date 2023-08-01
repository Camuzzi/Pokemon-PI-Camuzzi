import "./searchBar.styles.css";

function SearchBar({handleChange,handleClick}) {
    return(
        <div>
            
            <div>
                {/* <form>
                    <input placeholder="Search by name..." type="search" />
                    <button type="sumbit" >SEARCH</button>
                </form> */}
                <form>
                    <input type="text" placeholder="Search by name..."  onChange={handleChange}/>
                    <button onClick={handleClick}>SEARCH</button>
                </form>
            </div>

        </div>
    );
}

export default SearchBar;