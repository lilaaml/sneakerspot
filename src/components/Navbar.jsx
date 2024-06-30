import { FaRegHeart, FaRegUser  } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
import SearchBar from './SearchBar'
import SearchResultsList from "./SearchResultsList";
import { useState } from 'react'

const Navbar = () => {
    const [results, setResults] = useState([])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="nav-ctr container-fluid space-between">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a href="/" className="fw-bold navbar-brand">Sneaker Spot</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#search-toggle" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span><FaSearch /></span>
            </button>

            <div className="collapse navbar-collapse" id="hamburger-menu">
                <ul className="navbar-nav nav-left">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Brands</a>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Adidas</a></li>
                            <li><a href="/" className="dropdown-item">FILA</a></li>
                            <li><a href="/" className="dropdown-item">New Balance</a></li>
                            <li><a href="/" className="dropdown-item">Nike</a></li>
                            <li><a href="/" className="dropdown-item">Puma</a></li>
                            <li><a href="/" className="dropdown-item">Under Armour</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link highlight fw-bold">SALE</a>
                    </li>
                </ul>
                <ul className="navbar-nav nav-right">
                    <li className="nav-item d-flex-inline">
                        <a href="/" className="nav-link"><FaRegUser /></a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link"><FaRegHeart /></a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link"><FiShoppingCart /></a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="collapse navbar-collapse" id="search-toggle">
            <ul className="navbar-nav search-nav">
                {/* <form className="d-flex search-form px-3">
                    <input type="search" placeholder="Type to search..." className="search-bar form-control" aria-label="Search" value={input} onChange={(e) => handleChange(e.target.value)} />
                    <button type="submit" className="search-btn btn">Search</button>
                </form> */}
                <SearchBar setResults={setResults} />
                <SearchResultsList results={results} />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar