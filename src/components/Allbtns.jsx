import React from 'react'
import styled from 'styled-components'
import Btnhover from './Btnhover'
import Outline from './Outline'
import Text from './Text'
import Shadow from './Shadow'
import Disabled from './Disabled'
import Iconbtn from './Iconbtn'
import Size from './Size'
import Btngroup from './Btngroup'
import Final from './Final'




function Allbtns() {
    return (
        <>
      <Header >Buttons</Header>
      <Btnhover />
            <Outline />
            <Text />
            <Shadow />
            <Disabled />
            <Iconbtn />
            <Size />
            <Btngroup />
            <Final />
            <Footer>Created by Ravikumar - devchallanges.io</Footer>
       </>
    )
}

export default Allbtns

const Header = styled.div`



display:flex;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */


/* Gray 2 */

color: #4F4F4F;

`;
const Footer = styled.div`
position: absolute;
width: 287px;
height: 17px;
left: 322px;
top: 1118px;

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

color: #A9A9A9;`