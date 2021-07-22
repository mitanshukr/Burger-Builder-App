import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-app-66a21-default-rtdb.firebaseio.com/'
});

export default instance;