import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Navigation } from '../components/Navigation';

export function ProductFormPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue
  } = useForm();

  const[cookies] = useCookies(['csrftoken']);
  
  const productAPI = axios.create({
    baseURL: 'http://localhost:8000/api/v1/products/',
    // headers: {
    //   'X-CSRFToken': ''
    // }
  });

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if(params.id) {
      
      //await updateProduct(params.id, data);
      await  productAPI.put(`/${params.id}/`, data, {
        headers: {
          'X-CSRFToken': cookies.csrftoken
        }
      }).then(() => {
        toast.success("Product successufull updated!", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff"
          }
        });
      })
      
    }else{
      //await setCookie('X-CSRFToken', cookies.csrftoken);
      //await createProduct(data);
      await productAPI.post('/', data, {
        headers: {
          'X-CSRFToken': cookies.csrftoken
        }
      }).then(() => {
        toast.success("Product successufull created!", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff"
          }
        });
      });
    }
    
    navigate("/products");
  })

  useEffect(() => {
    async function loadProduct() {
      if(params.id) {
        const { data: { name, description, value } } = await productAPI.get(`/${params.id}`, {
          headers: {
            'X-CSRFToken': cookies.csrftoken
          }
        });
        //.then(() => {
        setValue('name', name);
        setValue('description', description);
        setValue('value', value);
        //});
        //await getProduct(params.id);
      }
    }
    loadProduct();
  });

  return (
    <div>
      <Navigation />
    
      <div className="max-w-xl mx-auto">
        
        <form onSubmit={onSubmit}>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-2">
            <input
              type="text"
              placeholder="Nome do produto" 
              { ...register("name", { required: true }) }
              //className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            { errors.name && <span>Name is required!</span> }
          </div>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-2">
            <input
              type="textarea" rows="2"
              placeholder="Product Description" 
              { ...register("description", { required: true }) }
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            { errors.description && <span>Description is required!</span> }
          </div>

          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 mt-2">
            <input
              type="number"
              placeholder="$1,000.00" 
              { ...register("value", { required: true }) }
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            { errors.value && <span>Value is required!</span> }
          </div>

          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">Salvar</button>
        </form>

        {
          params.id && 
          <div className="grid grid-cols-3 gap-3">
            <div>
            </div>
            <div className="flex justify-end">
              <Link className="bg-zinc-300 p-3 rounded-lg w-48 mt-3 text-center text-black" to="/products">Cancelar</Link>  
            </div>
            <div className="flex justify-end">
              <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                onClick={async () => {
                const confirmDeletion = window.confirm("Tem certeza que deseja excluir?");
                if(confirmDeletion){
                  //await deleteProduct(params.id);
                  await productAPI
                    .delete(`/${params.id}`, {
                      headers: {
                        'X-CSRFToken': cookies.csrftoken
                      }
                    })
                    .then(() => {
                      toast.success("Product deleted!", {
                        position: "bottom-right",
                        style: {
                          background: "#101010",
                          color: "#fff"
                        }
                      });
                    });
                  navigate("/products");
                }
                
              }}>Delete</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}