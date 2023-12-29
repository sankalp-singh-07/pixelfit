import { Routes, Route } from "react-router-dom" //> Routes is a map of all the route in the app and route is a single road of all the roads in routes which tells the app to load a component when a particular route is hit


import Nav from "../components/route/nav/nav.component"
import Home from "../components/route/homepage/home.component"
import Authentication from "../components/route/authentication/authentication.component"



const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Nav />} > 
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
    </>
  )
}

export default App


//? path="/" is the root route and element is the component to be loaded when the root route is hit such as www.example.com === www.example.com/ both are same

//? index in the nested route jo load hoga jab parent route hit hoga mtlb jab www.example.com/ hit hoga toh index route load hoga