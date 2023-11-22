import { useEffect, useState } from "react"
//import { setCookie } from "../api/products.api"
import { ProductCard } from "./ProductCard";
import { useCookies } from 'react-cookie'
import axios from 'axios'

export function ProductsList() {
  const productAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/products/',
    headers: {
      'X-CSRFToken': ''
    }
  });

  const [products, setProducts] = useState([]);
  const[cookies] = useCookies(['csrftoken']);

  useEffect(() => {
    async function loadProducts() {
      //await setCookie('X-CSRFToken', cookies.csrftoken);
      //const res = await getAllProducts();
      await productAPI
        .get('/',{
          headers: {
            'X-CSRFToken': cookies.csrftoken
          }
        })
        .then((res) => setProducts(res.data));
    }
    loadProducts();
  }, []);

 

  return(
    <div className="grid grid-cols-3 gap-3">
      { products.map(product => (
        <ProductCard key={product.id} product={product} />
      )) }
    </div>
  )
  
}