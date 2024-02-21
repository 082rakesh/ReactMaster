import { useState } from "react"
import Button from "./Button";

const SearchBox = (props) => {
    const [searchedValue, setSearchedValue] = useState("")

    return (
        <div className="search-container">
            <input className="input-text" name="searchInput" value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)}></input>
            <Button onClick ={() => {}} title = "Submit" /> 
        </div>
        
    )
}

export default SearchBox;