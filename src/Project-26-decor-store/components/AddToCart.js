import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import { FaPlus, FaMinus } from 'react-icons/fa'


const AddToCart = ({product}) => {
    
    const {variant_groups,name,inventory,price,id,media}=product;
    const {addToCart}=useCartContext();

   const [color,setColor]=useState(variant_groups[0].options[0].name);
    const [_name,setName]=useState('');
    const [itemsNumber,setItemsNumber]=useState(1);
    
    
    const addButton=()=>{
       let newValue=itemsNumber;
        newValue++;
        if(newValue>inventory.available){
            setItemsNumber(inventory.available);
        }
        else{
            setItemsNumber(newValue)
        }
    }
    
    const minusButton=()=>{
        let newValue=itemsNumber;
        newValue--;
        if(newValue<0){
            setItemsNumber(0);
        }
        else{
            setItemsNumber(newValue)
        }
      
    }
    const handleAddToCart=()=>{
        let id2=id+color;
        addToCart({id2,name,color,price,itemsNumber,media,inventory});
    }
    

  return <Wrapper className='page'>
      <div className='cart-details'>
       <div className="colors">
          {variant_groups[0].options.map(item=>{
    return <button className={item.name === color ? "color active" : 'color'} key={item.name} style={{background:item.name}} onClick={()=>{setColor(item.name);
    setName(item.name);}}></button>
})}
    </div>
          <AmountButtons amount={itemsNumber} increase={addButton} decrease={minusButton}/>
            </div>
    <Link className="addToCartBtn btn" to="/cart" onClick={handleAddToCart}>Add to cart</Link>

 
      
      </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
.color{
width:1.5rem;
height:1.5rem;
border-radius:50%;
margin:2px;
border:none;
cursor:pointer;
@media screen and (max-width:400px){
  width: 2.5rem;
height: 2.5rem;
}



}
.active{
opacity:0.4;

}


.buttons{
display:flex;
flex-direction:row;
margin:0.5rem;

}


.amount-button{
border:none;
font-size:2rem;
margin:0.5rem;
cursor:pointer;

}

.amount{
font-size:2rem;
font-weight:bold;

}


.cart-details{
display:flex;
flex:direction:row;
justify-content:space-between;


}

  .colors {
    display: flex;
    align-items: center;
    justify-content:center;
    
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
    
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
    
  }
  
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
