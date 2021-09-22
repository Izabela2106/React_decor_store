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

@media (max-width: 1050px) {
width:90vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
  .main {
    height: 600px;
    @media (max-width: 600px) {
      height:400px;
    }
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
    width:100%;
    img {
      height: 100px;
      cursor: pointer;
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(3, 30vw);
      justify-content:center;
      height:250px;
      
      img{
        height:100px;
      }
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 90vw);
    height:1250px;
    align-items:center;
    justify-content:center;

    img{
      height:200px;
      max-width:90vw;
    }
 


}
  .active {
opacity:0.5;
  }


  @media (max-width: 600px) {
    .main {
      height: 200px;
    }
    .gallery {
      img {
        height: 40px;
      }
      
    }
  }
  @media (max-width: 992px) {
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
