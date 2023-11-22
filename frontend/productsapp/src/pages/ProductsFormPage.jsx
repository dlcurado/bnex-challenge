import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
//import { setCookie, createProduct, deleteProduct, updateProduct, getProduct } from '../api/products.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

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
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name" 
          { ...register("name", { required: true }) }
          className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
        />
        { errors.name && <span>Name is required!</span> }

        <input
          type="textarea" rows="2"
          placeholder="Product Description" 
          { ...register("description", { required: true }) }
          className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
        />
        { errors.description && <span>Description is required!</span> }
        
        <input
          type="number"
          placeholder="$1,000.00" 
          { ...register("value", { required: true }) }
          className="bg-zinc-700 p3 rounded-lg block w-full mb-3"
        />
        { errors.value && <span>Value is required!</span> }

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Salvar</button>
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
  )
}