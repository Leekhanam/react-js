import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "./../../../../firebase";
const EditCategory = ({ onAdd, categories }) => {
  let { id } = useParams();
  let history = useHistory();
  const category = categories.find((category) => category.id === id);
  console.log(category);
  const [desc, setDesc] = useState("");
  const [text, setText] = useState(category.text);
  const { register, handleSubmit, watch, errors } = useForm();
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
          id: category.id,
          ...data,
          desc,
          text,
          image: url,
        };
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
      });

    history.push("/admin/categories");
    alert("Thêm danh mục thành công");
  };
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
        </div>
        <div className="card-body">
          <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
              <label htmlFor="">Tên danh mục</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="name"
                defaultValue={category.name}
                ref={register({ required: true })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.name && <span>Không để trống danh mục</span>}
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
              <img style={{ width: "100px" }} src={category.image}></img>
              <small id="imageHelp" className="form-text text-danger">
                {errors.image && errors.image.type === "required" && (
                  <span>Ảnh không được để trống</span>
                )}
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="">Mô tả</label>
              <CKEditor
                name="text"
                editor={ClassicEditor}
                data={text}
                defaultValue={category.text}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setText(data);
                  console.log(data);
                }}
                defaultValue={category.text}
                ref={register({
                  required: "Vui lòng điền đầy đủ",
                })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.text && errors.text.type === "required" && (
                  <span>Không để trống mô tả danh mục</span>
                )}
                {errors.text && errors.text.type === "pattern" && (
                  <span>
                    Mô tả danh mục không bắt đầu bằng dấu cách và ít hơn 50 kí
                    tự{" "}
                  </span>
                )}
              </small>
            </div>

            <button type="submit" className="btn btn-success mr-2">
              Cập nhật
            </button>
            <Link to="/admin/categories">
              <a className="btn btn-danger text-white">Trở lại</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

EditCategory.propTypes = {};

export default EditCategory;
