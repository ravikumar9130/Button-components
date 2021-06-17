import React from 'react'
import styled from 'styled-components'

function Disabled() {
    return (
        <Section>
        <Btn>Disabled</Btn>
        <Altbtn>Disabled</Altbtn>
    </Section>
    )
}

export default Disabled



const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Btn = styled.button`
border:none;
position: absolute;
width: 88px;
height: 36px;
left: 319px;
top: 558px;

background: #E0E0E0;
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;
width: 62px;
height: 20px;
left: 558px;
top: 566px;

background: white;
border: none;
color: #9E9E9E;
`
