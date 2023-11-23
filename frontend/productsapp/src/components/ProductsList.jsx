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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        { products.map(product => (
          <ProductCard key={product.id} product={product} />
        )) }
      </div>
    </div>
  )
  
}