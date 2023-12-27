import { Outlet } from "react-router-dom" //> use krte hai iska uss jagah pe jaha pe hume child route ko render krna hai jo match ho jaye... child is the nested route inside the parent route

const Nav = () => {
    return(
      <>
      <h1>Nav</h1>
      <Outlet />
      </>
    )
}

export default Nav