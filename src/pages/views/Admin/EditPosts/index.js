import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "./../../../../firebase";

const EditPosts = ({ onAdd, posts, cateposts }) => {
  let { id } = useParams();
  let history = useHistory();

  const post = posts.find((post) => post.id === id);
  const { register, handleSubmit, watch, errors } = useForm();
  const [content, setContent] = useState(post.content);
  function formatDate(date) {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const year = `0${date.getYear()}`.slice(-2);

    return `${day}:${month}:${year}`;
  }
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
          id: post.id,
          ...data,
          newTime,
          content,
          image: url,
        };
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
        console.log(newData);
      });

    history.push("/admin/posts");
    alert("Cập nhật bài viết thành công");
  };
  return (
    <div>
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
                defaultValue={post.title}
                ref={register({ required: true, pattern: /^\S{1}.{0,24}$/i })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.title && errors.title.type === "required" && (
                  <span>Không để trống tiêu đề bài viết </span>
                )}
                {errors.title && errors.title.type === "pattern" && (
                  <span>
                    Tiêu đề bài viết không bắt đầu bằng dấu cách và ít hơn 25 kí
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
              <img style={{ width: "100px" }} src={post.image}></img>
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
                defaultValue={post.content}
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
                  <option key={index} value={name}>
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

            <button type="submit" className="btn btn-success mr-2">
              Cập nhật
            </button>
            <Link to="/admin/posts">
              <a className="btn btn-danger text-white">Trở lại</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

EditPosts.propTypes = {};

export default EditPosts;
