import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "./../../../../firebase";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditProduct = ({ onAdd, products, categories }) => {
  let { id } = useParams();

  let history = useHistory();
  const product = products.find((product) => product.id === id);
  const slug = categories.find(
    (categories) => categories.id === product.category
  );
  const [smallDes, setsmallDes] = useState(product.smallDes);
  const [bigDes, setbigDes] = useState(product.bigDes);

  console.log(slug);
  const { register, handleSubmit, watch, errors } = useForm();
  const [desc, setDesc] = useState("");
  const onHandleSubmit = (data) => {
    let file = data.image[0];
    // tạo folder chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    let uploadTask = storageRef.put(file);
    // thực hiện việc đầy ảnh lên firebase
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);

    // lấy ảnh từ Firebase
    firebase
      .storage()
      .ref()
      .child(`images/${file.name}`)
      .getDownloadURL()
      .then((url) => {
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: product.id,
          ...data,
          smallDes,
          bigDes,
          image: url,
        };
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
      });

    history.push("/admin/products");
    alert("Cập nhật sản phẩm thành công");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Sửa sản phẩm</h6>
      </div>
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="">Tên sản phẩm</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="name"
              defaultValue={product.name}
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống tên sản phẩm </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên sản phẩm không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="">Giá sản phẩm</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="price"
              defaultValue={product.price}
              ref={register({ required: true, pattern: /^[0-9]{1,10}$/ })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.price && errors.price.type === "required" && (
                <span>Không để trống giá sản phẩm</span>
              )}
              {errors.price && errors.price.type === "pattern" && (
                <span>Giá sản phẩm gồm các số từ 0-9 ít hơn 10 kí tự</span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Giá sale</label>
            <input
              className="form-control"
              type="number"
              min="0"
              placeholder=""
              name="price_sale"
              defaultValue={product.price_sale}
              ref={register({ required: true, pattern: /^[0-9]{1,10}$/ })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.price_sale && errors.price_sale.type === "required" && (
                <span>Không để trống giá sản phẩm</span>
              )}
              {errors.price_sale && errors.price_sale.type === "pattern" && (
                <span>Giá sản phẩm gồm các số từ 0-9 ít hơn 10 kí tự</span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Ảnh</label>
            <input
              className="form-control"
              type="file"
              placeholder=""
              name="image"
              ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
            />
            <img style={{ width: "100px" }} src={product.image}></img>
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && errors.image.type === "required" && (
                <span>Ảnh không được để trống</span>
              )}
            </small>
          </div>
          {/* <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <textarea
              className="form-control"
              type="text"
              placeholder=""
              name="description"
              defaultValue={product.description}
              ref={register({ required: true, pattern: /^\S{1}.{0,499}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.description && errors.description.type === "required" && (
                <span>Không để trống mô tả sản phẩm</span>
              )}
              {errors.description && errors.description.type === "pattern" && (
                <span>
                  Mô tả sản phẩm không bắt đầu bằng dấu cách và ít hơn 500 kí tự{" "}
                </span>
              )}
            </small>
          </div> */}
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <CKEditor
              editor={ClassicEditor}
              data={smallDes}
              name="smalldes"
              onChange={(event, editor) => {
                const data = editor.getData();
                setsmallDes(data);
                console.log(data);
              }}
              defaultValue={product.smallDes}
              ref={register({ required: true })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.mota && errors.mota.type === "required" && (
                <span>Không để trống mô tả danh mục</span>
              )}
            </small>
          </div>

          {/* <div className="form-group">
            <label htmlFor="">Chi tiết sản phẩm</label>
            <textarea
              className="form-control"
              type="text"
              placeholder=""
              name="detail"
              defaultValue={product.detail}
              ref={register({ required: true, pattern: /^\S{1}.{0,499}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.detail && errors.detail.type === "required" && (
                <span>Không để trống chi tiết sản phẩm</span>
              )}
              {errors.detail && errors.detail.type === "pattern" && (
                <span>
                  Chi tiết sản phẩm không bắt đầu bằng dấu cách và ít hơn 500 kí
                  tự{" "}
                </span>
              )}
            </small>
          </div> */}
          <div className="form-group">
            <label htmlFor="">Chi tiết sản phẩm</label>
            <CKEditor
              editor={ClassicEditor}
              data={bigDes}
              name="bigdes"
              onChange={(event, editor) => {
                const data = editor.getData();
                setbigDes(data);
                console.log(data);
              }}
              defaultValue={product.bigDes}
              ref={register({ required: true })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.mota && errors.mota.type === "required" && (
                <span>Không để trống mô tả danh mục</span>
              )}
            </small>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Danh mục</label>
            </div>

            <select
              className="custom-select"
              name="category"
              ref={register({})}
            >
              <option></option>

              {categories.map(({ id, name }, index) => (
                <option selected key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <small id="imageHelp" className="form-text text-danger">
            {errors.category && errors.category.type === "required" && (
              <span>Không để trống danh mục</span>
            )}
          </small>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Tình trạng </label>
            </div>

            <select
              className="custom-select"
              name="status"
              ref={register({ required: true })}
            >
              <option selected value="Còn hàng">
                Còn hàng
              </option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success mr-2">
            Cập nhật
          </button>
          <Link to="/admin/products">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

EditProduct.propTypes = {};

export default EditProduct;
