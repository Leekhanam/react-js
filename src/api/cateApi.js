import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/categories");
};

const get = id => {
    return URL.get(`/categories/${id}`);
};

const create = data => {
    return URL.post("/categories", data);
};

const update = (id, data) => {
    return URL.put(`/categories/${id}`, data);
};

const remove = id => {
    return URL.delete(`/categories/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};