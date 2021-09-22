import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import {HiViewList,HiOutlineViewGrid} from 'react-icons/hi'
import styled from 'styled-components'
import {Sort} from "../components"



const ProductList = () => {
    
    const {filtered_products,display_grid,displayGrid,displayList}=useFilterContext();
    
  return <Wrapper>
      <section className="section-center">
          <div className="header">
          <div className="buttons">
      <button className="Viewbtn" onClick={displayList}><HiViewList/></button>
      <button className="Viewbtn" onClick={displayGrid}><HiOutlineViewGrid/></button>
      </div>
      <div className='sort'>
      <Sort />
          </div>
          </div>
      {display_grid ? <GridView products={filtered_products}/> : <ListView products={filtered_products}/>}
      
      </section>
      </Wrapper>
}
      
      
      
      
const Wrapper = styled.section`

.Viewbtn{
border:none;
font-size:2rem;
cursor:pointer;
display:flex;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}
}

.sort{
display:flex;
flex-direction:column;
justify-content:center;
padding-top:2rem;
}

.header{
display:flex;
flex-direction:row;
justify-content:space-between;
}


}
.buttons{
display:flex;
flex-direction:row;
margin:1rem 0;
}


.Viewbtn:hover{
background-color:rgb(0,0,0,0.2);
border-radius:10px;
}

`

export default ProductList
