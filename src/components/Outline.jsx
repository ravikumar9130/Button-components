import React from 'react'
import styled from 'styled-components'

function Outline() {
    return (
        <>
             <Section>
            <Btn>Default</Btn>
            <Altbtn>Default</Altbtn>
        </Section>
        </>
    )
}

export default Outline

const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Btn = styled.button`
position: absolute;
width: 88px;
height: 36px;
left: 319px;
top: 246px;

border: 1px solid #3D5AFE;
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;
width: 88px;
height: 36px;
left: 555px;
top: 246px;

background: rgba(41, 98, 255, 0.1);
border: 1px solid #3D5AFE;
border-radius: 6px;
`;