import { useEffect, useState } from "react"
import { getAllProducts } from "../api/products.api"
import { ProductCard } from "./ProductCard";

export function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await getAllProducts();
      console.log(res.data);
      setProducts(res.data);
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