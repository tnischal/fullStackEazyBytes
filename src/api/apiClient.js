import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URI,
    timeout: 5000,
    
}
);

export default apiClient;