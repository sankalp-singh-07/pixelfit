import { Outlet } from "react-router-dom" //> use krte hai iska uss jagah pe jaha pe hume child route ko render krna hai jo match ho jaye... child is the nested route inside the parent route

import { Link } from "react-router-dom" //> link works same as anchor tag but it does not reload the page when clicked and works for routing

import "./nav.styles.scss"

const Nav = () => {
    return(
      <>
      <div className="navigation">
        <h1>LOGO</h1>
        <div className="nav-links-container">
            <Link className='nav-link' to="/shop">Shop</Link>
        </div>
      </div>
      <Outlet />
      </>
    )
}

export default Nav