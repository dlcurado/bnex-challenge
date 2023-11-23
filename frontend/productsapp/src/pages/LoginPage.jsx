import { useEffect, useState, useContext } from 'react';
import { getUser, registerUser, loginUser } from '../api/users.api';
import AuthenticationContext from '../components/Authentication';

export function LoginPage() {
  const {authContext} = useContext(AuthenticationContext);
  const {setAuthentication} = useContext(AuthenticationContext);
  const {setRegistrationToggle} = useContext(AuthenticationContext);
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUser()
    .then(function(res) {
      setAuthentication(true);
    })
    .catch(function(error) {
      setAuthentication(false);
    });
  }, []);

  function submitRegistration(e) {
    e.preventDefault();
    registerUser(email, username, password)
    .then(function(res) {
      loginUser(email, password)
      .then(function(res) {
        setAuthentication(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    loginUser(email, password)
    .then(function(res) {
      setAuthentication(true);
    });
  }

  function update_form_btn() {
    if (authContext.registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Entrar";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Cadastrar";
      setRegistrationToggle(true);
    }
  }

  return (
    <div>
    {
      authContext.registrationToggle ? (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="data:image/jpeg;base64,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" alt="Bnex Challenge" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Cadastro de nova conta</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  onSubmit={e => submitRegistration(e)}>
              
              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" 
                    placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}
                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              {/* Usuário */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Usuário</label>
                <div className="mt-2">
                  <input id="username" name="username" type="text" 
                    placeholder="Nome do usuário" value={username} onChange={e => setUsername(e.target.value)}
                    autoComplete="user-name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div className="mt-2">
                  <input id="password" name="password" type="password" 
                    placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
              </div>
            
              <div>
                <button id="form_btn" onClick={update_form_btn} className="flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
              </div>
            </form>

          </div>
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="data:image/jpeg;base64,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" alt="Bnex Challenge" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre na sua conta já cadastrada</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  onSubmit={e => submitLogin(e)}>
              
              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" 
                    placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}
                    required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div className="mt-2">
                  <input id="password" name="password" type="password" 
                    placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
              </div>
            
              <div>
                <button id="form_btn" onClick={update_form_btn} className="flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastrar</button>
              </div>
            </form>

          </div>
        </div>
      )
    }
    </div>
  );
}