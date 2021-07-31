import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

import { useFilterContext } from '../context/filter_context'
import candles from "../assets/candles.jpg"
import pillows from "../assets/pillows.jpg"
import Lamps from "../assets/Lamps.jpg"
import flowerpots from "../assets/flowerpots.jpg"
import rugs from "../assets/rugs.jpg"
import cups from "../assets/cups.jpg"







const Categories = () => {
        const {updateFilters}=useFilterContext();

       const categories=[candles,pillows,Lamps,flowerpots,rugs,cups];
    
        const links=['candles','pillows','Lamps','flowerpots','rugs','cups'];
    
    
  return <Wrapper className='section-center'>
      
      <div className="fillers">
          <div className="filler">
              <div className='hr'></div>
              <h3>Customer Service</h3>
              <h3 className='upper'>Contact us</h3>
              <p>Mon-Fri 9:00-18:00 <br/>
                  decor@gmail.com <br/>
                  Phone +48 789 908 546 <br/>
                  </p>
              
              
              </div>
            <div className="filler">
              <div className='hr'></div>
              <h3>Only authentic items</h3>
              <h3 className='upper'>100% orginal products</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis.
                  </p>
              
              
              </div>
              
              
              
               <div className="filler">
              <div className='hr'></div>
              <h3>Payment security</h3>
              <h3 className='upper'>100% secure payment</h3>
        
              <p>Lorem ipsum dolor sit amet, consectetur.
                  </p>
              
              
              </div>
          
          </div>
      
      <div className="categories">
    {categories.map((item,index)=>{
     
     return <div key={index} name='category' className='category' style={{backgroundImage:`url(${item})`}}>
      <Link className='btn shop-btn' name='category' onClick={updateFilters} to='/products'>{links[index]}</Link>
      </div>


    })}
    </div>
      
      </Wrapper>
}

const Wrapper = styled.article`
display:flex;
    justify-content:center;
    flex-direction:column;

.categories{
display:grid;
grid-template-columns: 1fr;
justify-content:center;
align-items:center;
grid-gap:1rem;
    
}
.category{
    display:flex;
justify-content:center;
align-items:center;
width:90vw;
height:200px;
background-size:cover;
}

.category{

}

.shop-btn{

top:50%;
z-index:10;
display:block;
}
    
.fillers{
    display:grid;
    grid-template-columns:1fr;
    display:flex;
    justify-content:center;
    margin-bottom:2rem;
    
}
.filler{
    margin: 0 3rem;
    width:90vw;
    display:flex;
    justify-content:center;
 
    flex-direction:column;
}
    .hr{
        background:var(--dark-olive-green);
        width:70px;
        height:2px;
        margin-bottom:5px;
    }
    
h3{
  font-size:30px;  
}
    
h3.upper{
    text-transform:uppercase;
   color:var(--dark-olive-green);
   font-size:20px; 
   
}

    
@media (min-width: 750px){
.categories{

grid-template-columns: 1fr 1fr ;
}
   
    .category{

width:45vw;
height:200px;

}

    
    
}
    
     @media (min-width: 992px){
             .category{

width:30vw;
height:200px;

}
         
          .filler{
       width:25vw; 
    }
.fillers{
    grid-template-columns: 1fr 1fr 1fr;
}         

.categories{

grid-template-columns: 1fr 1fr 1fr;
}
     }
         




  
  
  

`

export default Categories
