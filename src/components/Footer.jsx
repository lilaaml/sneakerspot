import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer my-5">
        <div className="container">
          <div className="text-center text-sm-start">
            <section className="d-flex justify-content-between p-4">
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>
              <div>
                <a href="/" className="me-4">
                  <CiFacebook />
                </a>
                <a href="/" className="me-4">
                  <CiTwitter />
                </a>
                <a href="/" className="me-4">
                  <FaInstagram />
                </a>
              </div>
            </section>

            <section className="justify-content-center p-4">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="fw-bold">Sneaker Spot</h6>
                  <hr className="mb-3 mt-0 d-inline-block mx-auto" />
                  <p>We aim to deliver an engaging and efficient shopping experience, combining robust technology with sleek design.</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Tech Stack</h6>
                  <hr
                      className="mb-3 mt-0 d-inline-block mx-auto"/>
                  <p>React</p>
                  <p>Vite</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="copyright text-center p-3 d-flex flex-column">
          <span>&copy; 2024 Sneaker Spot</span>
          <span>Developed by Lila Amelia</span>
        </div>
      </div>
    )
  }
  
  export default Footer
  