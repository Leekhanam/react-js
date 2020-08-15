import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const DetailPost = ({ posts }) => {
  let { id } = useParams();
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <div>
        <div
          className="intro-section"
          style={{ backgroundImage: `url("${post.image}")` }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                <h1>{post.title}</h1>
                <p>{post.catepost}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="col-lg-12 pr-lg-5">
              <h2 className="my-4">{post.newTime}</h2>
              <p>{parse(post.content)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailPost.propTypes = {};

export default DetailPost;
