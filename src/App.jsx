import { Routes, Route } from "react-router-dom" //> Routes is a map of all the route in the app and route is a single road of all the roads in routes which tells the app to load a component when a particular route is hit


import Nav from "../components/route/nav/nav.component"
import Home from "../components/route/homepage/home.component"
import Authentication from "../components/route/authentication/authentication.component"
import Shop from "../components/route/shop/shop.component"
import Checkout from "../components/route/checkout/checkout.component"



const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Nav />} > 
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
    </>
  )
}

export default App


//? path="/" is the root route and element is the component to be loaded when the root route is hit such as www.example.com === www.example.com/ both are same

//? index in the nested route jo load hoga jab parent route hit hoga mtlb jab www.example.com/ hit hoga toh index route load hoga

//? shop/* is a wildcard route which means that any route that starts with shop/ will load the shop component and the * is a placeholder for the route that comes after shop/ such as www.example.com/shop/hats will load the shop component ... we declare * placeholder in the route that is the parent of the route that we want to load such as in this case we want to load the shop component when the route www.example.com/shop/hats is hit so we declare the * placeholder in the parent route which is shop/ so that when the route www.example.com/shop/hats is hit the shop component is loaded