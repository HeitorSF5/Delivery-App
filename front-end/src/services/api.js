import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001' });

// export const registerUser = async ({ name, email, password }) => {
//   const { response } = await api.post('register', { name, email, password });
//   return response;
// };

export default api;
