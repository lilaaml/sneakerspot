import { saleItem } from '../data/data'
import './Showcase.css'

const Sale = () => {
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-ID', {
          style: 'currency',
          currency: 'IDR'
    }).format(value);

    const saleValue = (oldPrice, newPrice) => {
        return Math.round(((oldPrice - newPrice) / newPrice) * 100)
    }

    const saleList = saleItem.map(item => (
        <div key={item.id} className="showcase-item pb-3 text-center">
            <div className="sale-price">
                <span>{saleValue(item.oldPrice, item.newPrice)}%</span>
                <span>OFF</span>
            </div>
            <img src={item.img} alt={item.name} />
            <div className="span">
                <span className="product-brand">{item.brand}</span>
                <span className="lead product-name">{item.name}</span>
                <span className="lead current-price">{numberFormat(item.newPrice)}</span>
                <span className="old-price">{numberFormat(item.oldPrice)}</span>
            </div>
        </div>
    ))

  return (
    <div className="showcase container-sm justify-content-sm-center">
        <h3 className="fw-bold text-center">On Sale!</h3>
      <div className="showcase-grid d-flex flex-wrap justify-content-center">
        {saleList}
      </div>
    </div>
  )
}

export default Sale