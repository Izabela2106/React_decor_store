import React from 'react'
import styled from 'styled-components'
import logo from '../assets/cell1.jpg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import {useCartContext} from "../context/cart_context"
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'

const Nav = () => {
    
    const {total_amount,clearCart}=useCartContext();
    const {myUser,logout,loginWithRedirect}=useUserContext();
    
  return <Wrapper>
      <div className="nav-header">
          <Link className='logo' to="/"><img src={logo} alt='logo'/></Link>
          </div>
      <div className="nav-center">
          <div className="links">
          {links.map(item=>{
           return <Link key={item.id} to={item.url} className='link'>{item.text}</Link>
          })}
        {myUser && <Link  className='link' to="/checkout">checkout</Link>}

          
          </div>
          
          </div>
          <div className="nav-footer">
             
                  
     <Link to="/cart" className="cart-btn" >
      <span className="cart-container">
          <FaShoppingCart/>
          <span className="cart-value">
              {total_amount}
              </span>
          </span>
          </Link>
          
          {!myUser && <button className="auth-btn" type="button" onClick={loginWithRedirect}> <FaUserPlus/> </button>}
     {myUser && <button className="auth-btn" type="button" onClick={()=>{
      clearCart();
      logout({returnTo:window.location.origin}
                                                                   )}}
     > <FaUserMinus/> </button>}
                      
                      </div>
                      
                  
                
              
      
      </Wrapper>
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;


  .nav-center {
display:flex;
justify-content:center;
align-items:center:
    width: 70vw;
    margin: 0 auto;
    
  }


.logo{
&:hover {
    border-bottom: none;

    }
}
        .links{
    display:flex;

    }
    a{
    text-decoration:none;
    font-size:1.5rem;
    color:var(--light-grey);
text-align:center;
    &:hover {
    border-bottom: 1.5px solid var(--light-grey);

    }



    }



    .link{
    margin:0.9rem
    }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 150px;
height:4.5rem;
      margin-left: 5px;
margin-top:10px;
object-fit:cover;

       
    }
  }
.cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 1.6rem;
      margin-left: 5px;
    }

  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }

 .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

.nav-footer{
width:20vw;
display:flex;
flex-direction:row;
font-size:2rem;
justify-content:flex-end;
align-items:center;
margin-right:2.5vw;


}
.nav-footer a{
color:black;
margin:20px;
}


@media(max-width:700px){
flex-direction:column;
 height: auto;

.links{
flex-direction:column;

}
}




  
  
  

`

export default Nav
