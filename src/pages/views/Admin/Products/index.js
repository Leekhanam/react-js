import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ products, onRemove, categories }) => {
  function removeElement(id) {
    onRemove(id);
  }
  // const slug = categories.find(
  //   (categories) => categories.id === products.category
  // );
  // console.log(slug);
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Sản phẩm</h6>
      </div>
      <div className="card-body">
        <Link to="/admin/add-product">
          <button className="btn btn-primary">Thêm sản phẩm</button>
        </Link>

        <div className="table-responsive mt-3">
          <table className="table table-striped" width="100%" cellSpacing={0}>
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Danh mục</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              {products.map(
                ({ id, name, image, price, category, status }, index) => (
                  <tr id={"row-" + id} key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to={`/admin/detail-product/${id}`}>{name}</Link>
                    </td>
                    <td>
                      <img src={image} alt="" width="70" height="80" />
                    </td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>{status}</td>
                    <td>
                      <Link
                        to={`/admin/edit-product/${id}`}
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
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
