

const products_reducer = (state, action) => {
    
    if(action.type==="GET_PRODUCTS_START"){
    return {...state,products_loading:true,products_error:false};
}
   if(action.type==="GET_PRODUCTS_SUCCESS"){
       
    return {...state,products:action.payload,products_loading:false,products_error:false};
}
  if(action.type==="GET_PRODUCTS_ERROR"){
    return {...state,products_loading:false,products_error:true};
}



if(action.type === 'GET_SINGLE_PRODUCT_START'){
    return {...state,single_product_loading:true,single_product_error:false}
}

if(action.type === 'GET_SINGLE_PRODUCT_SUCCESS'){
    
    return {...state,single_product_loading:false,single_product:action.payload}
}
if(action.type==="GET_SINGLE_PRODUCT_ERROR"){
    return{...state,single_product_loading:false,single_product_error:true}
}
   
    return state;
    
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
