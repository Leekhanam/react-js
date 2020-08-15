import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditCatePost = ({ onAdd, cateposts }) => {
  let { id } = useParams();
  let history = useHistory();
  const catepost = cateposts.find((catepost) => catepost.id === id);
  console.log(catepost);
  const { register, handleSubmit, watch, errors } = useForm();
  const onHandleSubmit = (data) => {
    const newData = {
      id: catepost.id,
      ...data,
    };
    onAdd(newData);
    alert("Cập nhật danh mục bài viết thành công");
    history.push("/admin/cate-post");
  };
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Cập nhật danh mục bài viết
          </h6>
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
                defaultValue={catepost.name}
                ref={register({ required: true, pattern: /^\S{1}.{0,50}$/i })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.name && errors.name.type === "required" && (
                  <span>Không để trống tên danh mục </span>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <span>
                    Tên danh mục không bắt đầu bằng dấu cách và ít hơn 50 kí tự{" "}
                  </span>
                )}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Mô tả danh mục</label>
              <input
                className="form-control"
                type="text"
                placeholder=""
                name="content"
                defaultValue={catepost.content}
                ref={register({ required: true, pattern: /^\S{1}.{0,100}$/i })}
              />
              <small id="imageHelp" className="form-text text-danger">
                {errors.content && errors.content.type === "required" && (
                  <span>Không để trống tiêu đề danh mục</span>
                )}
                {errors.content && errors.content.type === "pattern" && (
                  <span>Tiêu đề gồm ít hơn 100 kí tự</span>
                )}
              </small>
            </div>

            <button type="submit" className="btn btn-success mr-2">
              Cập nhật
            </button>
            <Link to="/admin/cate-post">
              <a className="btn btn-danger text-white">Trở lại</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

EditCatePost.propTypes = {};

export default EditCatePost;
