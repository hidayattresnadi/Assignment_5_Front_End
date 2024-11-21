import apiClient from "../axiosConfig.jsx";

const borrow = async (data) => {
    return await apiClient.post("/Borrowing", data);
};

const BorrowService = {
    borrow,
};
    
export default BorrowService;