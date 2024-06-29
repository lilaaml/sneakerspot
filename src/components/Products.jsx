import { normalItem } from '../data/data'
import './Showcase.css'

const Products = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR'
  }).format(value);

  const firstHalfList = normalItem.filter(item => item.firstHalf === true)
  const normalPriceList = firstHalfList.map(item => (
    <div key={item.id} className="showcase-item pb-3 text-center">
        <img src={item.img} alt={item.name} />
        <div className="span">
            <span className="product-brand">{item.brand}</span>
            <span className="lead product-name">{item.name}</span>
            <span className="lead">{numberFormat(item.price)}</span>
        </div>
    </div>
  ))  

  return (
    <div className="showcase container-sm justify-content-sm-center">
      <h3 className="fw-bold text-center">Products</h3>
      <div className="list-grid d-flex flex-wrap justify-content-center">
        {normalPriceList}
      </div>
      <div className="showcase-grid flex-wrap text-center">
        <a href="/" className="global-btn btn btn-lg btn-secondary m-3">See All Products</a>
      </div>
    </div>
  )
}

export default Products
