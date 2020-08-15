import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <p className="mb-4">
                <img
                  src="/dist/images/logo_footer.png"
                  alt="Image"
                  className="img-fluid"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nemo minima qui dolor, iusto iure.
              </p>
              <p>
                <a href="#">Learn More</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Solutions</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">Sell</a>
                </li>
                <li>
                  <a href="#">Submit a bid</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Services</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">Sell</a>
                </li>
                <li>
                  <a href="#">Submit a bid</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Contact</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Support Community</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Share Your Story</a>
                </li>
                <li>
                  <a href="#">Our Supporters</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
