import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: 'url("/dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  nihil.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Explore Now
                  </a>
                </p>
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
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="numbers">
                  <strong className="d-block">32, 594</strong>
                  <span>Number of Clients</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="numbers">
                  <strong className="d-block">25</strong>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="numbers">
                  <strong className="d-block">1,029</strong>
                  <span>Employees</span>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="numbers">
                  <strong className="d-block">10,200</strong>
                  <span>Cup of Coffees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section pb-0">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5 text-center">
                <span className="caption">Our Team</span>
                <h2 className="mb-2 text-black text-center">
                  Our <strong>Team</strong>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Craig Daniel</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Taylor Simpson</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Jonas Tabble</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Craig Daniel</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Taylor Simpson</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                <div className="feature-1 border person text-center">
                  <img
                    src="/dist/images/person_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <div className="feature-1-content">
                    <h2>Jonas Tabble</h2>
                    <span className="position mb-3 d-block">
                      Co-Founder, CEO
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                  </div>
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

About.propTypes = {};

export default About;
