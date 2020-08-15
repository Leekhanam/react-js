import URL from "./axiosHttp";

const getAll = () => {
  return URL.get("/contacts");
};

const get = (id) => {
  return URL.get(`/contacts/${id}`);
};

const create = (data) => {
  return URL.post("/contacts", data);
};

const update = (id, data) => {
  return URL.put(`/contacts/${id}`, data);
};

const remove = (id) => {
  return URL.delete(`/contacts/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
