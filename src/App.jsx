import { Routes, Route } from "react-router-dom" //> Routes is a map of all the route in the app and route is a single road of all the roads in routes which tells the app to load a component when a particular route is hit

import Home from "../components/route/homepage/home.component"

const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} /> 
    </Routes>
    </>
  )
}

export default App


//? path="/" is the root route and element is the component to be loaded when the root route is hit such as www.example.com === www.example.com/ both are same