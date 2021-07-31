import React from 'react'
import styled from 'styled-components'
import { BsEnvelopeFill } from 'react-icons/bs'


const Newsletter = () => {
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('e')
    }
    
return <Wrapper>
    <div className="container">
        <div className="envelope">
            <BsEnvelopeFill/>
            </div>
        <div className="text">
            <span>Enjoy 10% off</span>
            <p>your next shopping and birthday bonus</p>
            </div>
            <form className='form'>
                <input type="email" className='email' placeholder="Enter your email" onSubmit={(e)=>handleSubmit(e)}/>
                </form>
        
        </div>
    
    </Wrapper>
}

const Wrapper = styled.article`
display:flex;
justify-content:center;
margin-top:2rem;


.container{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

}
.text{
text-align:center;
}
.email{
border-radius:10%;
border:none;
}
input{
text-align:center;
}

span{
font-weight:bold;
}


.envelope{
font-size:30px;
}


`

export default Newsletter
