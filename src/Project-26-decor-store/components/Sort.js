import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
  const {filtered_products:products,sort,updateSort}=useFilterContext();
    
    
  return <Wrapper>
     
<p>{products.length} products found</p>
<form>
<label htmlFor='sort'>sort by   </label>
<select name='sort' id="sort" className='sort-input' value={sort} onChange={updateSort}>

<option value="price-lowest" >price(lowest)</option>
<option value="price-higest" >price(higest)</option>
<option value="name-a" >name(a-z)</option>
<option value="name-z" >name(z-a)</option>


</select>
</form>
      </Wrapper>
}


const Wrapper = styled.section`
  
  align-items: center;
  margin-bottom: 2rem;

  display: flex;
  justify-content:space-between;
   

  
  p {
    text-transform: capitalize;
    margin-bottom: 0;
    margin-right:2rem;
  }



  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }


@media screen and (max-width:768px){
  width:90vw;

}
@media screen and (max-width:380px){
form{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}  
}

`

export default Sort
