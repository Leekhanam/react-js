import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostCate = ({ posts }) => {
  let { name } = useParams();

  console.log(name);
  const post = posts.filter((post) => post.catepost === name);
  console.log(post);
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: 'url("dist/images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>Our Blog</h1>
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
        <div className="site-section pb-0">
          <div className="container">
            <div className="row">
              {post.map(
                ({ id, newTime, title, image, content, catepost }, index) => (
                  <div className="col-lg-4 mb-5">
                    <div className="news-entry-item">
                      <a href="#" className="thumbnail">
                        <Link to={`/detail-blog/${id}`}>
                          <img src={image} alt="Image" className="img-fluid" />
                        </Link>
                        <div className="date">
                          <span>{newTime}</span>
                        </div>
                      </a>
                      <h3 className="mb-0">
                        <a href="#">{title}</a>
                      </h3>
                      <div className="mb-3">
                        to <a href="#">{catepost}</a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <div className="custom-pagination">
                  <a href="#">1</a>
                  <a href="#" className="active">
                    2
                  </a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostCate.propTypes = {};

export default PostCate;
