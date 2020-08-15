import URL from "./axiosHttp";

const getAll = () => {
  return URL.get("/posts");
};

const get = (id) => {
  return URL.get(`/posts/${id}`);
};

const create = (data) => {
  return URL.post("/posts", data);
};

const update = (id, data) => {
  return URL.put(`/posts/${id}`, data);
};

const remove = (id) => {
  return URL.delete(`/posts/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
