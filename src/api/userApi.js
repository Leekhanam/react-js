import http from "./axiosHttp";
//const jwt = require('jsonwebtoken');
const getAll = () => {
    return http.get("/users");
};

const get = id => {
    return http.get(`/users/${id}`);
};

const create = data => {
    return http.post("/users", data);
};

const update = (id, data) => {
    return http.put(`/users/${id}`, data);
};
const token = '123123123123123213'

const login = (user) => {
    return http.get("/users", {
        params: {
            email:user.email,
            password:user.password
        }
    })
}

const remove = id => {
    return http.delete(`/users/${id}`);
};


export default {
    login,
    getAll,
    get,
    create,
    update,
    remove,
};