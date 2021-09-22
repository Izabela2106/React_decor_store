import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import {AiOutlineBulb,AiFillCar} from 'react-icons/ai'
import {GiOfficeChair,GiShoppingBag} from 'react-icons/gi'



const Service = () => {
  return <Wrapper className='section-center'>
     
      <div className="services">
          <div className="service">
              <AiOutlineBulb className='logo'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum sequi ex, maiores omnis sed.</p>
              
              </div>
              
               <div className="service">
             
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum sequi ex, maiores omnis sed.</p>
              
               <AiFillCar className='logo'/>
              
                
              </div>
               <div className="service">
              <GiOfficeChair className='logo'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum sequi ex, maiores omnis sed.</p>
              
              </div>
               
               
               <div className="service">
             
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum sequi ex, maiores omnis sed.</p>
              
               <GiShoppingBag className='logo'/>
              
                
              </div>
          
          </div>
      
      
      </Wrapper>
}

const Wrapper = styled.section`
  svg.logo{
font-size:200px;
margin: 0 3rem;
}

.service{
display:flex;
justify-conent:center;
align-items:center;

}
p{
margin:0 3rem;
}

@media (max-width: 800px){
.service{
margin: 3rem 0;
flex-direction:column;
}
p{
  order:2;
  margin-top:1rem;
}

path{
height:30rem;
width:30rem;
margin: 0 3rem;
}
     }

`
export default Service
