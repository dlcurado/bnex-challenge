import axios from 'axios'

const productAPI = axios.create({
  baseURL: 'http://localhost:8000/products/api/v1/products/',
})

export const getAllProducts = () => productAPI.get('/');

export const getProduct = (id) => productAPI.get(`/${id}`);

export const createProduct = (product) => productAPI.post('/', product);

export const deleteProduct = (id) => productAPI.delete(`/${id}`);

export const updateProduct = (id, product) => productAPI.put(`/${id}/`, product);