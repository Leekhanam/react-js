import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "./../../../../firebase";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

const AddCategory = ({ onAdd, products, categories }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  let history = useHistory();
  const [desc, setDesc] = useState("");
  const [text, setText] = useState("");

  // const description = parse(text);

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
          id: Math.random().toString(36).substr(2, 9),
          ...data,
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
              ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.name && errors.name.type === "required" && (
                <span>Không để trống tên danh mục </span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>
                  Tên danh mục không bắt đầu bằng dấu cách và ít hơn 25 kí tự{" "}
                </span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Ảnh danh mục</label>
            <input
              className="form-control"
              type="file"
              placeholder=""
              name="image"
              ref={register({ required: true })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && errors.image.type === "required" && (
                <span>Không để trống ảnh danh mục </span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <CKEditor
              editor={ClassicEditor}
              data={text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
                console.log(data);
              }}
              ref={register({ required: true })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.mota && errors.mota.type === "required" && (
                <span>Không để trống mô tả danh mục</span>
              )}
            </small>
          </div>

          <button type="submit" className="btn btn-primary mr-2">
            Thêm
          </button>
          <Link to="/admin/categories">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

AddCategory.propTypes = {};

export default AddCategory;
