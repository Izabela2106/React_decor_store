import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = (product) => {
    console.log(product)
    const {media,assets,price,name,inventory,id}=product.product;
  return <Wrapper >
      
  
      
      </Wrapper>
}

const Wrapper = styled.article`
          
           
.product-container{
position:relative;
}
    img{
        display:block;
        width:100%
            
        
        
        
    }
    
    .singleLink{
        position:absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        top:40%;
        left:50%;
        transform: translate(-50%, -50%);
        background: rgb(0,0,0,0.3);
        transition: var(--transition);
        svg {
          font-size: 1.25rem;
          color: var(--clr-white);
    }
        
    }
        .product-container:hover img {
    opacity: 0.5;
  }
        
        .footer{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            margin-bottom: 0;
           h4{
               font-weight:200;
               font-size:1.5rem;
           }
        }
        



  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
