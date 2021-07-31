import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

const ProductImages = ({assets=[{url:''}]}) => {

    
    const [main,setMain]=useState(assets[0])
   
   
   useEffect(()=>{
       setMain(assets[0])
   },[assets])
   
    
    
   
    
    
  return <Wrapper className='section-center'>
  
      <div className="main">
          <img src={main.url} alt="main"/>
          </div>
          <div className="gallery">
          {assets.map((item,index)=>{
           return <img src={item.url} className={item.url === main.url ? 'active': null} onClick={()=>{
                        setMain(assets[index])
                                                                                                 }}key={item.id}/>
          })}
          </div>
      
      
      </Wrapper>
          
    
    
}

const Wrapper = styled.section`

width:500px;
margin: 1rem;
  .main {
    height: 600px;

  }
  img {
    width: 100%;
height:inherit;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
opacity:0.5;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 400px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
