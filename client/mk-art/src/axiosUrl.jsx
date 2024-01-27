import axios from 'axios';
// 192.168.43.231
export default axios.create({
    baseURL: 'http://192.168.43.231:5000/api/v1/',
    headers: {
        "Content-Type" : "application/json"
    }
});