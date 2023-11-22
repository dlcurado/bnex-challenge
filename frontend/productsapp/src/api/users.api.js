import axios from 'axios'

axios.defaults.xsrfCookieName = 'productsapitoken';
axios.defaults.xsrfHeaderName = 'X-ProductsAPIToken';
axios.defaults.withCredentials = true;

const userAPI = axios.create({
  baseURL: 'http://localhost:8000/users/',
})

// User Authentication API Methods
export const getUser = () => userAPI.get('/user');

export const registerUser = (email, username, password) => userAPI.post('/register',
  {
    email: email,
    username: username,
    password: password
  }
);

export const loginUser = (email, password) => userAPI.post('/login',
  {
    email: email,
    password: password
  }
);

export const logoutUser = () => userAPI.post('/logout', { withCredentials: true });