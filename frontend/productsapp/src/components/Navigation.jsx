import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { logoutUser } from '../api/users.api';
import AuthenticationContext from './Authentication';

export function Navigation(){
  const {authContext} = useContext(AuthenticationContext);
  const {setRegistrationToggle} = useContext(AuthenticationContext);
  const {setAuthentication} = useContext(AuthenticationContext);
  
  function update_form_btn() {
    if (authContext.registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Registrar";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitLogout(e) {
    e.preventDefault();
    logoutUser()
    .then(function(res) {
      setAuthentication(false);
    });
  }

  if(authContext.authenticated) {
    return (
      <div className="flex justify-between py-2 mx-5">
        <Link to="/products">
          <h1 className="font-bold text-3xl mb-4">Sistema gerenciador de Produtos</h1>
        </Link>
        <button className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">
          <Link to="/products-create">Criar</Link>
        </button>
        <form onSubmit={e => submitLogout(e)}>
          <button type="submit" className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">Log out</button>
        </form>
      </div>
    )
  }
  return (
    <div className="flex justify-between py-2 mx-5">
      <Link to="/products">
        <h1 className="font-bold text-3xl mb-4">Sistema gerenciador de Produtos</h1>
      </Link>
      <button id="form_btn" onClick={update_form_btn} className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">Registrar</button>
    </div>
  )
}
