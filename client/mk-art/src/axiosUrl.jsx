import axios from 'axios';
// 192.168.43.231
export default axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    headers: {
        "Content-Type" : "application/json"
    }
});

export const staticFile = 'http://localhost:5000';
