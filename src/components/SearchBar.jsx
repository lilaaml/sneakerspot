import { useState } from 'react'
import { normalItem } from '../data/data'
import './SearchBar.css'

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        const results = normalItem.filter((name) => {
            return value && name && normalItem.value && normalItem.name.toLowerCase().includes(value)
        })
        setResults(results)
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    
  return (
    <form className="d-flex search-form px-3">
        <input type="search" placeholder="Type to search..." className="search-bar form-control" aria-label="Search" value={input} onChange={(e) => handleChange(e.target.value)} />
        <button type="submit" className="search-btn btn">Search</button>
    </form>
  )
}

export default SearchBar
