import axios from 'axios';

const api = axios.create({ baseURL: 'https://rocketseate-node.herokuapp.com/api'});

export default api;
