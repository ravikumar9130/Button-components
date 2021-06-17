import React from 'react'
import styled from 'styled-components'

function Iconbtn() {
    return (
        <Section>
            <Btn> <Pic width="20px" height="20px" src="/shopping-cart.png" alt="c" />    
                Default</Btn>
            <Alt>     
                Default
                <Pic width="20px" height="20px" src="/shopping-cart.png" alt="c" />
            </Alt>
            
        </Section>
    )
}

export default Iconbtn

const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Pic = styled.img`
margin-right: 10px;

`
const Btn = styled.button`
border:none;
position: absolute;
width: 105px;
height: 36px;
left: 319px;
top: 663px;

background: #2962FF;
box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
border-radius: 6px;
color:white;
`;

const Alt = styled.button`
border:none;
position: absolute;
width: 105px;
height: 36px;
left: 651px;
top: 663px;

background: #2962FF;
box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
border-radius: 6px;
color:white;
`;

