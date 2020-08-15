import URL from "./axiosHttp";

const getAll = () => {
  return URL.get("/cateposts");
};

const get = (id) => {
  return URL.get(`/cateposts/${id}`);
};

const create = (data) => {
  return URL.post("/cateposts", data);
};

const update = (id, data) => {
  return URL.put(`/cateposts/${id}`, data);
};

const remove = (id) => {
  return URL.delete(`/cateposts/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
