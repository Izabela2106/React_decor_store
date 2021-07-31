import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
    
    const {fetchSingleProduct, single_product_loading:loading,
    single_product_error:error,
    single_product}=useProductsContext();
    
    
    const {id}=useParams();
    
    useEffect(()=>{
        fetchSingleProduct(id);
    },[id])
    
     if(loading){
        return <Loading/>
    }
        if(error){
            console.log(error);
            return <Error/>
        }
    
    
    const {name,price={raw:''},assets,categories,variant_groups=[{options:['']}],description,inventory={available:0}} =single_product;
            
   
    
    
  return <>
      <PageHero title={name} product/>
      <Wrapper className="section-center">
      <div >
      
    <div className="center">
      <ProductImages assets={assets}/>
      <div className="info">
          <h2>{name}</h2>
      
      <h4>${price.raw}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui placeat in nesciunt magni ipsum voluptas cumque, minus aut temporibus voluptate facilis ipsam commodi ut maiores numquam porro magnam suscipit iste. Distinctio, repellat sed nobis, illo ratione consequuntur, magni quas voluptatem assumenda doloremque aliquid accusamus! Inventore incidunt iste voluptatum, corporis minus consequatur.</p>
      <h5>{inventory.available ? 'in stock': null}</h5>
    
            <hr/>
                {inventory.available ? <AddToCart product={single_product}/>: null}

          </div>
      
      </div>
      </div>
      
      </Wrapper>
                </>
}

const Wrapper = styled.main`
display:flex:
justify-content:center;
width:90vw;
.center{
display:flex;
flex-direction:row;
}

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 500px;
    display: flex;
    flex-direction:column;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
