import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const DetailProduct = ({ products }) => {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);
 // console.log(product);
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: `url("${product.image}")` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>{product.name}</h1>
                <p>{parse(product.smallDes)}</p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Bid Now
                  </a>
                  <a href="#" className="btn btn-outline-primary text-white">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
</div>
 {/* <div className="owl-carousel slide-one-item mb-5 owl-loaded owl-drag">
  <div className="owl-stage-outer">
    <div className="owl-stage" style={{transform: 'translate3d(-1719px, 0px, 0px)', transition: 'all 0s ease 0s', width: '4011px'}}>
      <div className="owl-item cloned" style={{width: '573px'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <img src={product.image} alt="Image" className="img-fluid mb-54" />
        </div>
     </div>           
  </div>          
     </div> */}


        
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-lg-2">
                <div className="side-box mb-4">
                  <p>
                    Price:{" "}
                    <strong className="text-black">{product.price} đ</strong>{" "}
                    <br />
                    Sale:{" "}
                    <strong className="text-black">
                      {product.price_sale} đ
                    </strong>
                  </p>
                  <form action="#">
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="$0.00"
                      />
                      <button className="btn btn-block">Submit a Bid</button>
                      <span className="d-block text-center my-2">or</span>
                      <button className="btn btn-primary btn-block">
                        Buy Now
                      </button>
                    </div>
                    <p className="mb-0">
                      <a href="#">Sign In</a> / <a href="#">Register</a>
                    </p>
                  </form>
                </div>
                <div className="side-box text-center"></div>
              </div>
              <div className="col-lg-8 pr-lg-5">
                <div className="owl-carousel slide-one-item mb-5">
                  <img
                    src="/dist/images/product_1.jpg"
                    alt="Image"
                    className="img-fluid mb-54"
                  />
                  <img
                    src="/dist/images/product_1.jpg"
                    alt="Image"
                    className="img-fluid mb-54"
                  />
                  <img
                    src="/dist/images/product_1.jpg"
                    alt="Image"
                    className="img-fluid mb-54"
                  />
                </div>
                <p>{parse(product.bigDes)}</p>

                <ul className="list-unstyled bidders"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

DetailProduct.propTypes = {};

export default DetailProduct;
