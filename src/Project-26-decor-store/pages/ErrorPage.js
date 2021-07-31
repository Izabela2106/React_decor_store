import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import error from '../assets/error.jpg'

const ErrorPage = () => {
  return <Wrapper >
      <div className="section-center">
      <img src={error} />
      </div>
            <Link to='/' className='btn'>go shopping</Link>

    
      </Wrapper>
}

const Wrapper = styled.main`
 img{
height:400px;
}


  background:white;
  display: flex;
flex-direction:column;
  justify-content: row;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
