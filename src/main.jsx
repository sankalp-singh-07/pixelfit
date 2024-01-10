import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //> BrowserRouter keeps UI in sync with URL

import { Provider } from 'react-redux' //> Provider is a component that we wrap around our application so that our application gets all the functionality of redux
import { store } from './store/store.js'

import App from './App.jsx'
// import { UserProvider } from '../src/contexts/user.context.jsx'
import { CategoriesProvider } from '../src/contexts/categories.context.jsx'
import { CartProvider } from '../src/contexts/cart.context.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/* <UserProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      {/* </UserProvider> */}
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
)
//> Browserrouter is a component that we wrap around our application so that our application gets all the functionality of routing
//> UserProvider sole purpose is to tell us inside our components tree which component has access to context object we created