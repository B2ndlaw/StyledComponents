import React from 'react';

import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
     <Box>
     <StyledBtn>Hello</StyledBtn>
     </Box>
    </div>
  );
}



export default App;

const StyledBtn = styled.button`
border: none;
background-color: black;
padding: 10px 20px;
border-radius: 5px;
color: grey;
font-size: 2rem;
font-weight: bold;
`

const SuperBtn = styled.button`
  
`

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

`
