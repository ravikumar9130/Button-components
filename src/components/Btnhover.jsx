import React from 'react'
import styled from 'styled-components'

function Btnhover() {
    return (
        <Section>
            <Btn>Default</Btn>
            <Altbtn>Default</Altbtn>
        </Section>
    )
}

export default Btnhover


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
top: 141px;

background: #E0E0E0;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;
width: 81px;
height: 36px;
left: 555px;
top: 141px;
border:none;
background: #AEAEAE;
box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
border-radius: 6px;
`