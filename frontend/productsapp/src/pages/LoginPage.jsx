import { useEffect, useState, useContext } from 'react';
import { getUser, registerUser, loginUser } from '../api/users.api';
import AuthenticationContext from '../components/Authentication';

export function LoginPage() {
  const {authContext} = useContext(AuthenticationContext);
  const {setAuthentication} = useContext(AuthenticationContext);
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

  return (
    <div>
    {
      authContext.registrationToggle ? (
        <div className="center">
          <form onSubmit={e => submitRegistration(e)}>
            <div className="mb-3">
              <p>Email address</p>
              <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} className="placeholder:text-gray-400" />
              <p className="text-muted">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="mb-3">
              <p>Username</p>
              <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <p>Password</p>
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">
              Submit
            </button>
          </form>
        </div>        
      ) : (
        <div className="center">
          <form onSubmit={e => submitLogin(e)}>
            <div className="mb-3">
              <p>Email address</p>
              <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              <p className="text-muted">
                We'll never share your email with anyone else.
              </p>
            </div>
            <div className="mb-3">
              <p>Password</p>
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="bg-indigo-500 px-5 py-1 mr-5 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      )
    }
    </div>
  );
}