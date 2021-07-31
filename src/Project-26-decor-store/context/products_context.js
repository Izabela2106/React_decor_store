import axios from 'axios'
import React, { useContext, useEffect, useReducer,Component } from 'react'
import { commerce } from '../../lib/commerce';
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'



const initialState = {
    products_loading:false,
    products:[],
    products_error:false,
    single_product_loading:false,
    single_product_error:false,
    single_product:{},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    
        const [state,dispatch]=useReducer(reducer,initialState);

    
    const fetchProducts=async()=>{
        dispatch({type:"GET_PRODUCTS_START"})

        
          try{
             
        const response= await commerce.products.list();
        const data=response.data; 
            dispatch({type:"GET_PRODUCTS_SUCCESS",payload:data});
    
        }
        catch(err){
            
              dispatch({type:"GET_PRODUCTS_ERROR"});
        }  

    }
    
    
    const fetchSingleProduct= async (id)=>{
            dispatch({type:"GET_SINGLE_PRODUCT_START"})


        try{
            let response;
          await commerce.products.retrieve(id).then(product =>{response=product; })
            dispatch({type:"GET_SINGLE_PRODUCT_SUCCESS",payload:response})
        }
        
        catch(err){
         dispatch({type:"GET_SINGLE_PRODUCT_ERROR"})

            }
    }
    
    useEffect(()=>{
       fetchProducts(); 
    },[])
    
    
    
    
    
    
  return (
    <ProductsContext.Provider value={{...state,fetchSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
