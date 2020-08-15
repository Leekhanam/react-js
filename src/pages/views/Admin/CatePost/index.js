import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CatePost = ({ cateposts, onRemove }) => {
  console.log(cateposts);
  function removeElement(id) {
    onRemove(id);
  }
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Danh mục bài viết
          </h6>
        </div>
        <div className="card-body">
          <Link to="/admin/add-catepost">
            <button className="btn btn-primary">Thêm danh mục</button>
          </Link>

          <div className="table-responsive mt-3">
            <table className="table table-striped" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên danh mục</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                {cateposts.map(({ id, name, content }, index) => (
                  <tr id={"row-" + id} key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{content}</td>
                    <td>
                      <Link
                        to={`/admin/edit-catepost/${id}`}
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
                        XÓA
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

CatePost.propTypes = {};

export default CatePost;
