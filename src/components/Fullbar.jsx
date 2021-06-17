import React from 'react'
import styled from 'styled-components'

function Fullbar() {
    return (
        
            <Sidebar>
      <Sidehead>Dev challanges</Sidehead>
      <Sidebody>
        colors 
        typography 
        <B>buttons</B>
        spaces
        
        grid
      </Sidebody>
   </Sidebar>
        
    )
}

export default Fullbar


const B = styled.div`
color:#000`
const Sidebar = styled.div`
position: absolute;
width: 237px;
height: 1234px;
left: -8.5px;
top: -9.07px;
 background: #FAFBFD;`

const Sidehead = styled.div`
   position: absolute;
width: 114px;
height: 20px;
left: 48px;
top: 38px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 19px; 
      `;
const Sidebody = styled.div`
position: absolute;
width: 62px;
height: 20px;
left: 48px;
top: 180px;

font-family: Noto Sans JP;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;

color: #9E9E9E;
`
