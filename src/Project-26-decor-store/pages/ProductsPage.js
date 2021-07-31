import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'


const ProductsPage = () => {
  return <>
      <PageHero title='products'/>
      <Filters/>
      <ProductList/>
      </>
      
      
}




export default ProductsPage
