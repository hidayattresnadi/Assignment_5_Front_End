import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Fungsi request umum
// const request = async (method, url, params = null, data = null, config = {}) => {
//   try {
//     const response = await apiClient({
//       method,
//       url,
//       params,
//       data, // Body untuk POST, PUT
//       ...config, // Config tambahan (jika ada)
//     });
//     return response.data; // Return hanya data dari response
//   } catch (error) {
//     console.error(`Error with ${method.toUpperCase()} request to ${url}:`, error);
//     throw error; // Opsional: lempar error untuk penanganan lebih lanjut
//   }
// };

export default apiClient;
