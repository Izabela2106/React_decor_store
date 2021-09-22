import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import image from '../assets/banner2.jpg'

const AboutPage = () => {
  return <>
      <PageHero title="about"/>
      
      <Wrapper className='section-center'>
      
      <div className="content">
      <div className="image">
          <img src={image} alt='pic' />
          </div>
      <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo, dolorem sequi rem. Accusamus placeat voluptate, sit optio incidunt quis facere, eius itaque rerum quaerat minima ratione, vitae. Debitis fugit dignissimos deserunt, dicta, illum ullam. Voluptate nihil, voluptatibus unde quae, inventore natus ullam velit fugiat a libero reprehenderit aliquam! Distinctio, quisquam, reiciendis, a et asperiores id explicabo officiis earum ad illum illo voluptates culpa ratione atque! Laborum laudantium eligendi culpa quos voluptatem, vero, sunt consequuntur, perspiciatis temporibus exercitationem at ipsum pariatur dicta accusantium itaque fugit corrupti aspernatur nam illum consectetur, quaerat! Itaque consequuntur cumque commodi reprehenderit eum eius, quia eligendi.
          </div>
          </div>
      
      
      </Wrapper>
          </>
}

const Wrapper = styled.section`
  display: flex;
flex-direction:column;
  gap: 4rem;

.content{
display:flex;
flex-direction:row;
margin-top:1rem;

@media screen and (max-width:900px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
  .image{
    margin-left:0;
  }
  .text{
    margin:2rem 0;
  }
}
@media screen and (max-width:900px){
  img{
    width:90vw;
  }
}



}
.image{
margin-left:2rem;
}
.text{
margin: 0 3rem;
}
  img {
    min-width:200px;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
 
 
`
export default AboutPage
