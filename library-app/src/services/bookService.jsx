import apiClient from "../axiosConfig.jsx";

const getAll = async (params) => {
    return await apiClient.get("/Book", { params });
};

const get = async (id) => {
    return await apiClient.get(`/Book/${id}`);
};

const create = async (data) => {
    return await apiClient.post("/Book", data);
};

const update = async (id, data) => {
    return await apiClient.put(`/Book/${id}`, data);
};

const remove = async (id) => {
    return await apiClient.delete(`/Book/${id}`);
};

const BookService = {
    getAll,
    get,
    create,
    update,
    remove
};
    
export default BookService;