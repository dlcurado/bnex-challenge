import axios from 'axios'


const productAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/products/',
    headers: {
      'X-CSRFToken': ''
    }
  });

export const setCookie = async (key, value) => {
  await productAPI.interceptors.request.use(
    config => {
      config.headers[key] = value;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );
}

// Products API Methods
// export const getAllProducts = () => productAPI.get('/');

// export const getProduct = (id) => productAPI.get(`/${id}`);

// export const createProduct = (product) => productAPI.post('/', product);

// export const deleteProduct = (id) => productAPI.delete(`/${id}`);

// export const updateProduct = (id, product) => productAPI.put(`/${id}/`, product);