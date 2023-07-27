
// import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Blog from './Blog/Blog'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import Shop from './Shop/Shop'
// import View from './View/View'
import Views from './View/Views'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    
    
  <>

    <Router> 
    <Navbar/>
      <ToastContainer/>
      <Routes>

      <Route exact path='/' element={<><Navbar/><Home/> <Product/> <Blog/><Footer/></>} />
        <Route exact path='/shop' element={<><Navbar/><Shop/><Footer/></>} />
        <Route exact path='/Views/:id' element={<><Navbar/><Views/><Footer/></>}/>
        <Route exact path='/Cart' element={<><Navbar/><Cart/><Footer/></>}/>
      </Routes>
    </Router>
 </>
   
  );
}

export default App
