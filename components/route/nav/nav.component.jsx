import { useContext } from "react";
import { UserContext } from "./../../../src/contexts/user.context.jsx";
import { CartContext } from "../../../src/contexts/cart.context.jsx";

import { signOutAuthUser } from "./../../../src/utils/firebase/firebase.utils";

import { Outlet } from "react-router-dom" //> use krte hai iska uss jagah pe jaha pe hume child route ko render krna hai jo match ho jaye... child is the nested route inside the parent route

import { Link } from "react-router-dom" //> link works same as anchor tag but it does not reload the page when clicked and works for routing

import "./nav.styles.scss"

import Logo from './../../../src/assests/crown.svg' // importing svg as a component

import CartIcon from "../../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component.jsx";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cartDropdownOpen, setCartDropdownOpen } = useContext(CartContext);
  // console.log(currentUser);

  // const signOutAuthUserHandler = async () => {
  //   await signOutAuthUser() //> Signs out
  //   //> Now change the context to null as there are no one currently logged in
  //   setCurrentUser(null);
  // }

    return(
      <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <img src={Logo} className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className='nav-link' to="/shop">Shop</Link>
            {currentUser ? (<Link className="nav-link" onClick={signOutAuthUser}>Sign Out</Link>) : (<Link className='nav-link' to="/auth">Sign In</Link>)}
            <CartIcon />
        </div>
        {cartDropdownOpen && <CartDropdown />}
      </div>
      <Outlet />
      </>
    )
}

export default Nav