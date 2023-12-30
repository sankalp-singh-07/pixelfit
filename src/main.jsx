import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //> BrowserRouter keeps UI in sync with URL
import App from './App.jsx'
import { UserProvider } from '../src/contexts/user.context.jsx'
import { ProductsProvider } from '../src/contexts/products.context.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
//> Browserrouter is a component that we wrap around our application so that our application gets all the functionality of routing
//> UserProvider sole purpose is to tell us inside our components tree which component has access to context object we created