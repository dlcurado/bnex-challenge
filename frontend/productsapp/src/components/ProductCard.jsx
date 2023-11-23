import { useNavigate } from 'react-router-dom'

export function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div onClick={() => {
        navigate(`/products/${product.id}` )
      }}
    > 
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1573/1573145.png" 
          alt="${ product.name }"
          className="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{ product.name }</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${ product.value }</p>
    </div>
  );
}