import React from 'react'
import styled from 'styled-components'

function Shadow() {
    return (
        <Section>
        <Btn>Default</Btn>
    </Section>
    )
}

export default Shadow



const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Btn = styled.button`
position: absolute;
width: 81px;
height: 36px;
left: 319px;
top: 453px;

background: #3D5AFE;
border-radius: 6px;

font-family: Noto Sans JP;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
border:none;
color: #FFFFFF;
`;
