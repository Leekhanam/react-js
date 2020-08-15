import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Posts = ({ posts, onRemove }) => {
  function removeElement(id) {
    onRemove(id);
    console.log(posts);
  }
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Bài viết</h6>
      </div>
      <div className="card-body">
        <Link to="/admin/add-posts">
          <button className="btn btn-primary">Thêm bài viết </button>
        </Link>

        <div className="table-responsive mt-3">
          <table className="table table-striped" width="100%" cellSpacing={0}>
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tiêu đề </th>
                <td scope="col">Ảnh</td>
                <th scope="col">Danh mục</th>
                <th scope="col">Ngày phát hành</th>
                <th scope="col">Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(({ id, image, title, catepost, newTime }, index) => (
                <tr id={"row-" + id} key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{title}</td>
                  <td>
                    <img src={image} width="80"></img>
                  </td>
                  <td>{catepost}</td>
                  <td>{newTime}</td>
                  <td>
                    <Link
                      to={`/admin/edit-posts/${id}`}
                      className="btn btn-success"
                    >
                      Cập nhật
                    </Link>{" "}
                    &nbsp;
                    <button
                      onClick={() => removeElement(id)}
                      type=" button"
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
