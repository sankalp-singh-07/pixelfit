import { Routes, Route } from "react-router-dom" //> Routes is a map of all the route in the app and route is a single road of all the roads in routes which tells the app to load a component when a particular route is hit

import { Outlet } from "react-router-dom" //> use krte hai iska uss jagah pe jaha pe hume child route ko render krna hai jo match ho jaye... child is the nested route inside the parent route


import Home from "../components/route/homepage/home.component"

const Nav = () => {
  return(
    <>
    <h1>Nav</h1>
    <Outlet />
    </>
  )
}


const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Nav />} > 
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  )
}

export default App


//? path="/" is the root route and element is the component to be loaded when the root route is hit such as www.example.com === www.example.com/ both are same

//? index in the nested route jo load hoga jab parent route hit hoga mtlb jab www.example.com/ hit hoga toh index route load hoga