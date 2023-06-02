import React, { useContext } from 'react';
import './App.css';
import AuthNavbar from './components/Navbar/AuthNavbar';
import NoAuthNavbar from './components/Navbar/NoAuthNavbar';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Auth from './components/sign-in/auth';
import SignUp from './components/sign-up/sign-up';
import { authContext } from './components/Auth/AuthProvider';
import Brand from './pages/Brand';

function Home() {
  console.log("Home Route page !");
  const { auth } = useContext(authContext);
  console.log("auth >>>"+JSON.stringify(auth.data));
  return (
    <div className="App">
      <BrowserRouter>
      {auth.data ? <AuthNavbar /> : <NoAuthNavbar />}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signin" exact element = { <Auth/> }></Route>
          <Route path="/signup" exact element = { <SignUp/> }></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/brand' element={<Brand/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/logout' element={<Auth />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </ BrowserRouter>
      </div>
  );
}

export default Home;
