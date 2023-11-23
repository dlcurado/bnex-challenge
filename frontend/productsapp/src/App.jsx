import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/ProductsPage";
import { ProductFormPage } from "./pages/ProductsFormPage";
import { LoginPage } from './pages/LoginPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast'
import AuthenticationContext from './components/Authentication';



function App() {
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [authenticated, setAuthentication] = useState(false);

  const authContext = {
    authenticated: authenticated,
    registrationToggle: registrationToggle,
  };

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <AuthenticationContext.Provider value={{authContext, setRegistrationToggle, setAuthentication}}>
          <Routes>
            <Route path='/' element={!authContext.authenticated ? <LoginPage /> : <ProductPage />} />
            <Route path='/products' element={!authContext.authenticated ? <LoginPage /> : <ProductPage />} />
            <Route path='/products-create' element={!authContext.authenticated ? <LoginPage /> : <ProductFormPage />} />
            <Route path='/products/:id' element={!authContext.authenticated ? <LoginPage /> : <ProductFormPage />} />
          </Routes>
          <Toaster />
        </AuthenticationContext.Provider>
    </div>
    </BrowserRouter>
  )
}

export default App