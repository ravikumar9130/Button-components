import React from 'react'
import styled from 'styled-components'

function Final() {
    return (
        <Section>
            <Btn>Default</Btn>
            <Altbtn>Default</Altbtn>
            <Third>Default</Third>
            <Fourth>Default</Fourth>
        </Section>
    )
}

export default Final

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
top: 984px;

background: #AEAEAE;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;
width: 81px;
height: 36px;
left: 523px;
top: 984px;
color:white;
border: none;
background: #0039CB;
box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
border-radius: 6px;
`

const Third = styled.div`
position: absolute;
width: 104px;
height: 36px;
left: 731px;
top: 984px;

background: #1C313A;
box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
border-radius: 6px;

color:white;
border: none;
text-align:center;
`
const Fourth = styled.div`
position: absolute;
width: 81px;
height: 36px;
left: 971px;
top: 984px;

background: #9A0007;
box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
border-radius: 6px;
color:white;
border: none;
text-align:center;
`