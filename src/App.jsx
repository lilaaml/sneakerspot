import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sale from './components/Sale'
import NewReleases from './components/NewReleases'
import Categories from './components/Categories'
import Products from './components/Products'
import Brands from './components/Brands'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sale />
      <NewReleases />
      <Categories />
      <Products />
      <Brands />
      <Footer />
    </div>
  )
}

export default App
