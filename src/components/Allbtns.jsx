import React from 'react'
import styled from 'styled-components'
import Btnhover from './Btnhover'
import Outline from './Outline'
import Text from './Text'
import Shadow from './Shadow'
import Disabled from './Disabled'
import Iconbtn from './Iconbtn'
function Allbtns() {
    return (
        <>
      <Header >Buttons</Header>
      <Btnhover />
            <Outline />
            <Text />
            <Shadow />
            <Disabled />
            <Iconbtn/>
       </>
    )
}

export default Allbtns

const Header = styled.div`
position: absolute;
width: 93px;
height: 36px;
left: 320px;
top: 53px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */


/* Gray 2 */

color: #4F4F4F;

`;
