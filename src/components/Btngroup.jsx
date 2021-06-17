import React from 'react'
import styled from 'styled-components'

function Btngroup() {
    return (
        <Section>
            <Btn>Default</Btn>
            <Altbtn>Default</Altbtn>
            <Third>Default</Third>
            <Fourth>Default</Fourth>
        </Section>
    )
}

export default Btngroup

const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Btn = styled.button`
border:none;
position: absolute;
width: 81px;
height: 36px;
left: 319px;
top: 879px;

background: #E0E0E0;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;border:none;
width: 81px;
height: 36px;
left: 523px;
top: 879px;
color:white;
background: #2962FF;
box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
border-radius: 6px;
`

const Third = styled.div`
position: absolute;border:none;
width: 104px;
height: 36px;
left: 731px;
top: 879px;

color:white;
background: #455A64;
box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
border-radius: 6px;

text-align:center;
`
const Fourth = styled.div`
position: absolute;
width: 81px;border:none;
height: 36px;
left: 971px;
top: 879px;
text-align:center;
color:white;
background: #D32F2F;
box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
border-radius: 6px;


`