import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import banner from '../assets/banner.jpg'

const Hero = () => {
  return <Wrapper>
      <section className='section'>
      <div className="banner">
        
        <Link className='btn goShopbtn' to='/products' >Shop now</Link>

          </div>
      
      </section>
          </Wrapper>
}

const Wrapper = styled.section`

  min-height: 60vh;
  display: grid;
  place-items: center;
display:flex;
justify-content:center;
  .img-container {
    display: none;
  }



.banner{
width:95vw;
height:90vh;
display:flex;
justify-content:center;
align-items:center;
background-image:url(${banner});
background-size:cover;
}

.goShopbtn{
height:2rem;
text-align:center;
}

 @media (min-width: 992px){

}







 
`

export default Hero
