import URL from "./axiosHttp";

const getAll = () => {
    return URL.get("/products");
};

const get = id => {
    return URL.get(`/products/${id}`);
};

const create = data => {
    return URL.post("/products", data);
};

const update = (id, data) => {
    return URL.put(`/products/${id}`, data);
};

const remove = id => {
    return URL.delete(`/products/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};