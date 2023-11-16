import { Link } from 'react-router-dom'

export function Navigation(){
  return (
    <div className="flex justify-between py-2 mx-5">
      <Link to="/products">
        <h1 className="font-bold text-3xl mb-4">Sistema gerenciador de Produtos</h1>
      </Link>
      <button className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">
        <Link to="/products-create">Criar</Link>
      </button>
      
    </div>
  )
}
