import React from 'react'
import styled from 'styled-components'

function Size() {
    return (
        <Section>
            <Btn>Default</Btn>
            <Altbtn>Default</Altbtn>
            <Lg>
              <P>Default</P>
          </Lg>
        </Section>
    )
}

export default Size


const Section = styled.div`
margin: 50px 40px;
display: flex;
`;
const Btn = styled.button`
border:none;
position: absolute;
width: 73px;
height: 32px;
left: 319px;
top: 773px;

color: white;
border: none;
background: #2962FF;
box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
border-radius: 6px;
`;
const Altbtn = styled.button`
position: absolute;
width: 81px;
height: 36px;
left: 523px;
top: 771px;

color: white;
border: none;
background: #2962FF;
box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
border-radius: 6px;
`
const Lg = styled.div`

color: white;
border: none;
position: absolute;
width: 93px;
height: 42px;
left: 731px;
top: 768px;

background: #2962FF;
box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
border-radius: 6px;
            `
const P = styled.div`
        padding-left    : 10px;
        padding-top: 7px;
`