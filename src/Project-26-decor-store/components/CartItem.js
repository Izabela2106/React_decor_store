import React, {useState} from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { FaPlus, FaMinus } from 'react-icons/fa'





const CartItem = ({name,id,price,amount,image,inventory,color}) => {
    
    const {removeFromCart,toggleItem}=useCartContext();

    
       const increase=()=>{
        
        toggleItem(id,'inc');
          
    }
    const decrease=()=>{
        toggleItem(id,'dec');

    }
 
    
    

  return <Wrapper>
      <div className='item'>
      <img src={image} alt="img"/>
          <div className='container'>
        <h5>{name}</h5>
      <div className="color" style={{background:color}}></div>
      </div>
         </div>
      <h5 className='price'>${(price.raw).toFixed(2)}</h5>
          <AmountButtons amount={amount} increase={increase} decrease={decrease} />
         
            <h5 className='subtotal'>${(price.raw*amount).toFixed(2)}</h5>
            <button className="btn" onClick={()=>removeFromCart(id)}>remove</button>
            


      
      
      
      </Wrapper>
}

const Wrapper = styled.article`
  .subtotal {
    width:4rem;
  }
  .price {
    display: none;
  }
  @media screen and (max-width:776px){
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

  }
  @media screen and (max-width:400px){
    padding:1rem 0;
    border: 1px solid black;
  }



.color{
width:1rem;
height:1rem;
border-radius:50%;
margin:2px;
border:none;
cursor:pointer;
margin-top:1rem;



}

.container{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

.item{
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
width:7rem;

img{
height:80px;
width:80px;
display: block;
border-radius: var(--radius);
object-fit: cover;
margin:1rem;
align-self:center;
}
@media screen and (max-width:400px){
  display:flex;
  flex-direction:column;
}
}

h5{
text-align:center;
}


  display: grid;
  grid-template-columns: 250px auto auto;
  grid-template-rows: 95px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 250px 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
