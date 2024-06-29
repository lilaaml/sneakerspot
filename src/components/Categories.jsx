import './Categories.css'

const Categories = () => {
    return (
      <div className="container-sm justify-content-center mt-3 mb-5">
        <h3 className="fw-bold text-center mb-3">Categories</h3>
        <div className="container-sm card-group text-center justify-content-center">
          <div className="card card-men d-flex-inline flex-wrap">
            <div className="card-body">
              <h3 className="card-title fw-bold text-uppercase text-light">Mens</h3>
              <a href="/" className="btn btn-secondary fw-bold">Shop Now</a>
            </div>
          </div>
          <div className="card card-women d-flex-inline flex-wrap">
            <div className="card-body">
              <h3 className="card-title fw-bold text-uppercase text-light">Womens</h3>
              <a href="/" className="btn btn-secondary fw-bold">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Categories
  