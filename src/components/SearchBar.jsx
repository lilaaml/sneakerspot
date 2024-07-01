import { useState } from 'react'
import { normalItem } from '../data/data'
import './SearchBar.css'

const SearchBar = () => {
    const [input, setInput] = useState("")

    const searchResultList = normalItem.filter((item) => {
        return input.toLowerCase() === "" ? "" : item.name.toLowerCase().includes(input)
    }).map((item) => (
        <p className="search-result" key={item.id}>{item.name}</p>
        // <ul id="searchResultList" key={item.id}>
        //     <li className="search-result">{item.name}</li>
        // </ul>
            // <p className="search-result p-2">{item.name}</p>
        // <div id="searchResultBox" className="container-fluid d-flex flex-column" key={item.id}>
        // </div>
    ))
    
  return (
    <div className="container-fluid">
        <form className="d-flex search-form px-3">
            <input type="search" placeholder="Type to search..." className="search-bar form-control" aria-label="Search" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="search-btn btn">Search</button>
        </form>
        <div id="searchResultBox">
            {searchResultList}
        </div>
    </div>
  )
}

export default SearchBar
