import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.43.47:5000/api/v1/',
    headers: {
        "Content-Type" : "application/json"
    }
});