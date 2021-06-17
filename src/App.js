import React from 'react'
import './App.css';
import Allbtns from './components/Allbtns';

import Fullbar from './components/Fullbar';
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Fullbar/>
      <Allbtns></Allbtns>
      </Container>
  );
}

export default App;


const Container = styled.div`




`
