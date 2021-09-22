import React, {useState}from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {
  const [activeColor,setActiveColor]=useState(null);
    const {all_products,filters,updateFilters,clearFilters}=useFilterContext();
    let categories=all_products.map(item=>{
        return item.categories[0].name;
    })
    categories= new Set(categories)
    categories=new Array(...categories)
    
   let colors=all_products.map(item=>{
        return item.variant_groups[0].options;
    })
    colors=colors.flat(1);
    
    colors=colors.map(item=>{
        return item.name;
    })
    
    colors=new Set(colors);
colors=new Array(...colors);  
  
   
   
   
    
  return <Wrapper className='section-center'>
      <div className="filters-header">
      <form onSubmit={(e)=>{e.preventDefault()}}>
       <input type="text" name="text" placeholder='search' className='search-input' value={filters.text} onChange={updateFilters}/>
      </form>
       
       <button className="clear-btn" onClick={clearFilters}>Clear filters</button>
      </div>
      <div className="filters">
                    

      <div className="filter">
          <h5>Categories</h5>
          <div className="cat" >
              <button name='category' className="category" onClick={updateFilters}>all</button>
          {categories.map((category,index)=>{
           return <button key={index} name='category' className="category" onClick={updateFilters}>{category}</button>
          })}
          </div>
          </div>

          <div className="filter">
                <h5>Colors</h5>
            <div className="colors">
         <button name='color' className="color" data-color='all' 
         onClick={(e)=>{updateFilters(e);setActiveColor(e.target.getAttribute('data-color'));if(e.target.getAttribute('data-color') ==='all'){;setActiveColor(null)}}}>all</button>

             {colors.map((color,index)=>{
              return <button name='color' data-color={color} className={color === activeColor ? "color active" : 'color'}
               onClick={(e)=>{updateFilters(e);setActiveColor(e.target.getAttribute('data-color'));if(e.target.getAttribute('data-color') ==='all'){;setActiveColor(null)}}} key={index} style={{background:color}}></button>
             })}
             </div>
              </div>
               <div className="filter">
            <h5>price</h5>  
            <p className='price'>price:{filters.price}$</p>
            <input type='range' name='price' onChange={updateFilters} max={filters.max_price} min={filters.min_price} value={filters.price}/>
            </div>
        
            </div>
      
      </Wrapper>
}

const Wrapper = styled.section`


.filters{
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 2rem 1rem;

@media screen and (max-width:800px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
  .filter{
    margin:1rem 0;
  }
}

}



.color {
width:1.5rem;
height:1.5rem;
border-radius:50%;
margin:2px;
}


.cat{

display:grid;
grid-template-columns:repeat(3,1fr);
cursor:pointer;


}
.category{
margin:0 10px;
}

.colors{
display:grid;
grid-template-columns:repeat(6,1fr);
cursor:pointer;
}

.filters-header{
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
}
h5{
text-align:center;
}


form{
  display:flex;
flex-direction:row;
aling-items:center;
justify-content:space-around;
}




  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: black;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border: 3px solid var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding:  0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
