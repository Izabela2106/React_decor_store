import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
    
    const {cart}=useCartContext();
    
    if(cart.length<=0){
        return <Wrapper>
            
            <div className="cont">
        <h2>Your cart is empty </h2>
        <Link to="/products" className='btn'>Go shopping</Link>
        </div>
        </Wrapper>
    }
    else{
    
  return <Wrapper>
      <PageHero title="cart"/>
      <CartContent/>
      </Wrapper>
    }
}

const Wrapper = styled.main`


display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-height:70vh;

.cont{
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:50vw;
}


  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
