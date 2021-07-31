import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Product from './Product'
const ListView = ({products}) => {
  return <Wrapper>
      <section className="products-container">
      {products.map(product=>{
       const {media,name,id,price}=product;
       return  <div className="product-container">
          <img src={media.source} alt='picture'/>
           <Link className='singleLink' to={`/products/${id}`}> <FaSearch/> </Link>
        <div className="footer">
            <h4>{name}</h4>
            <h4>{price.formatted_with_symbol}</h4>

            </div>
          </div>
      
      })}
      </section>
      </Wrapper>
}

const Wrapper = styled.section`

  
    
    
        .product-container{
position:relative;
            margin-bottom: 3rem;
}
    img{
        display:block;
        height:400px;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
            margin-bottom: 1rem;

  }
    
    .singleLink{
        position:absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        top:45%;
        left:50%;
        transform: translate(-50%, -50%);
        background: rgb(0,0,0,0.3);
        transition: var(--transition);
        svg {
          font-size: 1.25rem;
          color: var(--clr-white);
    }
        
    }
    .singleLink:hover{
         background:rgb(0,0,0,0.7);
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
 
    
    .products-container {
    display: flex;
        flex-direction:column;
   
  }
    
  @media (min-width: 992px) {
   
    }
  }
`

export default ListView
