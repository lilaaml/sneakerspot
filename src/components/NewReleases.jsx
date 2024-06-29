import { normalItem } from '../data/data'
import './Showcase.css'

const NewReleases = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR'
  }).format(value);

  const newReItem = normalItem.filter(item => item.newRelease === true)
  const newReList = newReItem.map(item => (
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
        <h3 className="fw-bold text-center">New Releases</h3>
      <div className="showcase-grid d-flex flex-wrap justify-content-center">
        {newReList}
      </div>
    </div>
  )
}

export default NewReleases