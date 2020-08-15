import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{
            backgroundImage: 'url("/dist/images/bìa.jpg")',
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>The Best Place to Buy and Sell</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-7 mb-5 text-center mx-auto">
                <span className="caption">Auctions</span>
                <h2 className="text-black">
                  Current <strong>Auctions</strong>
                </h2>
              </div>
            </div>
            <div className="row auctions-entry">
              {products.map(
                ({ id, name, image, price, price_sale, detail }, index) => (
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="item">
                      <div>
                        <p className="price">{price_sale}đ</p>
                        <Link to={`/detail/${id}`}>
                          <a>
                            <img
                              src={image}
                              alt="Image"
                              className="img-fluid"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="p-4">
                        <h3>
                          <Link to={`/detail/${id}`}>
                            <a>{name}</a>
                          </Link>
                        </h3>
                        <div className="d-flex mb-2">
                          <span>Shoes</span>
                          <span className="ml-auto">4 bids</span>
                        </div>
                        <a href="item-single.html" className="btn btn-bid">
                          Submit a Bid
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="site-section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mb-5">
                <span className="caption">How?</span>
                <h2 className="text-black">
                  How <strong>It Works</strong>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="step">
                  <span className="wrap-icon icon-user" />
                  <h3>Register</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed consequatur quaerat magnam sequi nobis ut et iure.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step">
                  <span className="wrap-icon icon-money" />
                  <h3>Buy or Bid</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed consequatur quaerat magnam sequi nobis ut et iure.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step">
                  <span className="wrap-icon icon-glass" />
                  <h3>Submit a bid</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed consequatur quaerat magnam sequi nobis ut et iure.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step last">
                  <span className="wrap-icon icon-trophy" />
                  <h3>Win</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed consequatur quaerat magnam sequi nobis ut et iure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <img
                  src="/dist/images/hero_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 pl-lg-5">
                <div className="mb-5">
                  <span className="caption">About?</span>
                  <h2 className="text-black">
                    About <strong>Us</strong>
                  </h2>
                </div>
                <div className="d-flex feature-icon mb-3">
                  <span className="wrap-icon icon-paper-plane mr-2" />
                  <div>
                    <h3>Fast Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iste, debitis!
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-icon mb-3">
                  <span className="wrap-icon icon-smile-o mr-2" />
                  <div>
                    <h3>Happy Customers</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iste, debitis!
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-icon mb-3">
                  <span className="wrap-icon icon-support mr-2" />
                  <div>
                    <h3>24/7 Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iste, debitis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-bg style-1"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center mx-auto">
                <span className="caption text-white">Testimonials</span>
                <h2 className=" text-center mb-5 text-white">
                  Happy <strong>Clients</strong>
                </h2>
              </div>
            </div>
            <div className="owl-slide owl-carousel owl-testimonial">
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!”
                  </p>
                </div>
              </div>
              <div className="ftco-testimonial-1">
                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid mr-3"
                  />
                  <div>
                    <h3>Allison Holmes</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, mollitia. Possimus mollitia nobis libero quidem aut
                    tempore dolore iure maiores, perferendis, provident numquam
                    illum nisi amet necessitatibus. A, provident aperiam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-7">
                <h2 className="text-black mb-4">
                  Create an account and start Buy, Bid or Sell Now!
                </h2>
                <a href="#" className="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
