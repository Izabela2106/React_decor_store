import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from "styled-components";
import {Home,About,Cart,Checkout,Error,Private,Products,SingleProduct,PrivateRoute,AuthWrapper,Services} from "./pages"



function App() {
  return <main>
    
      <Router>
      <Navbar/>

      
      <Switch>
      <Route exact path="/">
          <Home/>
          </Route>
      
       <Route exact path="/about">
          <About/>
          </Route>
       
        <Route exact path="/cart">
          <Cart/>
          </Route>
        
        <Route exact path="/services">
          <Services/>
          </Route>
        
         <PrivateRoute exact path="/checkout">
          <Checkout/>
          </PrivateRoute>
         
         <Route exact path="/products">
          <Products/>
          </Route>
        
          
           <Route exact path="/products/:id" children={<SingleProduct/>}>
          </Route>
           
           <Route path="*">
               <Error/>
               </Route>
      
      </Switch>
           <Footer/>
      </Router>
                

      </main>
           
}

export default App
