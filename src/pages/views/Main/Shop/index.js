import React from "react";
import PropTypes from "prop-types";

const Shop = (props) => {
  return (
    <div>
      <main>
        {/* breadcrumb area start */}
        <div className="breadcrumb-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap text-center">
                  <nav aria-label="breadcrumb">
                    <h1>shop</h1>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        shop grid full width
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb area end */}
        {/* page main wrapper start */}
        <div className="shop-main-wrapper pt-100 pb-100 pt-sm-50 pb-sm-50">
          <div className="container">
            <div className="row">
              {/* shop main wrapper start */}
              <div className="col-lg-12">
                <div className="shop-product-wrapper">
                  {/* shop product top wrap start */}
                  <div className="shop-top-bar">
                    <div className="row">
                      <div className="col-xl-5 col-lg-4 col-md-3 order-2 order-md-1">
                        <div className="top-bar-left">
                          <div className="product-view-mode">
                            <a
                              className="active"
                              href="#"
                              data-target="grid-view"
                            >
                              <i className="fa fa-th" />
                            </a>
                            <a href="#" data-target="list-view">
                              <i className="fa fa-list" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-8 col-md-9 order-1 order-md-2">
                        <div className="top-bar-right">
                          <div className="product-short">
                            <p>Sort By : </p>
                            <select className="nice-select" name="sortby">
                              <option value="trending">Relevance</option>
                              <option value="sales">Name (A - Z)</option>
                              <option value="sales">Name (Z - A)</option>
                              <option value="rating">
                                Price (Low &gt; High)
                              </option>
                              <option value="date">Rating (Lowest)</option>
                              <option value="price-asc">Model (A - Z)</option>
                              <option value="price-asc">Model (Z - A)</option>
                            </select>
                          </div>
                          <div className="product-amount">
                            <p>Showing 1–16 of 21 results</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* shop product top wrap start */}
                  {/* product item list start */}
                  <div className="shop-product-wrap grid-view row">
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-1.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-1.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-3.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-3.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-3.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-4.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-4.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-4.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-5.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-5.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-6.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-5.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-6.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-6.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-6.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-7.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-7.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-7.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-8.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-8.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-8.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-9.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-9.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-9.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-10.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-10.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-10.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-11.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-11.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-11.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                    {/* product single item start */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      {/* product grid start */}
                      <div className="product-item mb-30">
                        <div className="product-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-1.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action-link">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="left"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="left"
                            >
                              <i className="ion-bag" />
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="left"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="left"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star-outline" />
                            </span>
                          </div>
                          <h4>
                            <a href="product-details.html">Itaque earum</a>
                          </h4>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product grid end */}
                      {/* product list item end */}
                      <div className="product-list-item mb-30">
                        <div className="product-list-thumb">
                          <a href="product-details.html">
                            <img
                              className="pri-img"
                              src="img/product/product-2.jpg"
                              alt=""
                            />
                            <img
                              className="sec-img"
                              src="img/product/product-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-content-list">
                          <h4>
                            <a href="product-details.html">
                              Aliquam lobortis est
                            </a>
                          </h4>
                          <div className="ratings">
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                            <span>
                              <i className="ion-android-star" />
                            </span>
                          </div>
                          <div className="price-box">
                            <span className="old-price">
                              <del>$90.00</del>
                            </span>
                            <span className="regular-price">$70.00</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde perspiciatis quod numquam, sit fugiat,
                            deserunt ipsa mollitia sunt quam corporis ullam rem,
                            accusantium adipisci officia eaque.
                          </p>
                          <div className="product-link">
                            <a
                              href="checkout.html"
                              data-toggle="tooltip"
                              title="Add to Cart"
                              data-placement="top"
                              className="add-btn"
                            >
                              <i className="ion-bag" />
                              Add to cart
                            </a>
                            <a
                              href="wishlist.html"
                              data-toggle="tooltip"
                              title="Wishlist"
                              data-placement="top"
                            >
                              <i className="ion-android-favorite-outline" />
                            </a>
                            <a
                              href="compare.html"
                              data-toggle="tooltip"
                              title="Compare"
                              data-placement="top"
                            >
                              <i className="ion-ios-shuffle" />
                            </a>
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#quick_view"
                            >
                              <span
                                data-toggle="tooltip"
                                title="Quick View"
                                data-placement="top"
                              >
                                <i className="ion-ios-eye-outline" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* product list item end */}
                    </div>{" "}
                    {/* product single item start */}
                  </div>
                  {/* product item list end */}
                  {/* start pagination area */}
                  <div className="paginatoin-area text-center">
                    <ul className="pagination-box">
                      <li>
                        <a className="Previous" href="#">
                          <i className="ion-ios-arrow-left" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a className="Next" href="#">
                          <i className="ion-ios-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end pagination area */}
                </div>
              </div>
              {/* shop main wrapper end */}
            </div>
          </div>
        </div>
        {/* page main wrapper end */}
      </main>
    </div>
  );
};

Shop.propTypes = {};

export default Shop;
