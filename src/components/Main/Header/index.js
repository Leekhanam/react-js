import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ cateposts }) => {
  console.log(cateposts);
  return (
    <div>
      <div>
        <header className="site-navbar py-4 site-navbar-target" role="banner">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <a href="index.html" className="d-block">
                  <img
                    src="/dist/images/logo.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li className="">
                      <Link to="/">
                        <a className="nav-link text-left">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/buy">
                        <a className="nav-link text-left">Buy</a>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <a className="nav-link text-left">Sell</a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link to="/blog">
                        <a href="services.html" className="nav-link text-left">
                          Blog
                        </a>
                      </Link>
                      <ul className="dropdown">
                        {cateposts.map(({ id, name, content }, index) => (
                          <li key={index}>
                            <a href="">
                              <Link to={`/posts/${name}`}>{name}</Link>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li>
                      <Link to="/about">
                        <a className="nav-link text-left">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <a className="nav-link text-left">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="login.html" className="text-white">
                    Sign In / Register
                  </a>
                  <a
                    href="#"
                    className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                  >
                    <span
                      className="icon-menu h3 text-white"
                      style={{ position: "relative", top: "7px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <div class="hero-slide owl-carousel site-blocks-cover"> */}
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
