import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "../../../../firebase";

const AddPosts = ({ onAdd, cateposts }) => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const [content, setContent] = useState("");

  function formatDate(date) {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = `0${date.getYear()}`.slice(-2);

    return `${day}:${month}:${year}`;
  }

  // const onHandleSubmit = (data) => {
  //   const date = new Date();
  //   const newTime = formatDate(date);
  //   const newData = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     newTime,
  //     content,
  //     ...data,
  //   };
  //   onAdd(newData);
  //   console.log(newData);
  //   history.push("/admin/posts");
  // };

  const onHandleSubmit = (data) => {
    const date = new Date();
    const newTime = formatDate(date);

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
          newTime,
          content,
          image: url,
        };
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
      });

    history.push("/admin/posts");
    alert("Thêm bài viết thành công");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Thêm bài viết</h6>
      </div>
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="">Tiêu đề bài viết</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              name="title"
              ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.title && errors.title.type === "required" && (
                <span>Không để trống tiêu đề bài viết </span>
              )}
              {errors.title && errors.title.type === "pattern" && (
                <span>
                  Tiêu đề bài viết không bắt đầu bằng dấu cách và ít hơn 100 kí
                  tự{" "}
                </span>
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
            <small id="imageHelp" className="form-text text-danger">
              {errors.image && errors.image.type === "required" && (
                <span>Ảnh không được để trống</span>
              )}
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="">Nội dung</label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              name="content"
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
                console.log(data);
              }}
              ref={register({ required: true })}
            />
            <small id="imageHelp" className="form-text text-danger">
              {errors.mota && errors.mota.type === "required" && (
                <span>Không để trống nội dung</span>
              )}
            </small>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Danh mục</label>
            </div>

            <select
              className="custom-select"
              name="catepost"
              ref={register({ required: true })}
            >
              <option selected></option>
              {cateposts.map(({ id, name }, index) => (
                <option key={index} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <small id="imageHelp" className="form-text text-danger">
            {errors.catepost && errors.catepost.type === "required" && (
              <span>Không để trống danh mục</span>
            )}
          </small>

          <button type="submit" className="btn btn-primary mr-2">
            Thêm
          </button>
          <Link to="/admin/posts">
            <a className="btn btn-danger text-white">Trở lại</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

AddPosts.propTypes = {};

export default AddPosts;
