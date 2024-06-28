import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './E-commerce/Home.jsx'
import { Provider } from 'react-redux/es/exports.js'  

import { Store } from "../src/E-commerce/ReactRedux/CardSlice/Store.jsx"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Home />
      
    </Provider>




  </React.StrictMode>,
)


