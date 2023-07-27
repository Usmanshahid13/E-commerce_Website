import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import { store } from './state/store.jsx'
import { Provider } from 'react-redux'
// import Context from './Context/Context.jsx'
import {configureStore, } from "@reduxjs/toolkit"
import cartReducer from './Feature/cartSlice.js'
 
const store=configureStore({
reducer:{
  cart: cartReducer
},

})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Provider store={store}>
    <App />
</Provider>
  </React.StrictMode>,
)
