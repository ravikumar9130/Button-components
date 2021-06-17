import React from 'react'
import styled from 'styled-components'

function Text() {
    return (
        <div>
            <Textbtn>
                Default
            </Textbtn>
            <Altbtn>
                Default
            </Altbtn>
        </div>
    )
}

export default Text

const Textbtn = styled.div`
position: absolute;
width: 49px;
height: 20px;
left: 319px;
top: 357px;

font-family: Noto Sans JP;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;

color: #3D5AFE;
 `
const Altbtn = styled.div`
position: absolute;
width: 88px;
height: 36px;
left: 555px;
top: 351px;

background: rgba(41, 98, 255, 0.1);
border-radius: 6px;

padding-top: 10px;
font-family: Noto Sans JP;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;

color: #3D5AFE;
 `
