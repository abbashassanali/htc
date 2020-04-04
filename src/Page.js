import React from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const InputWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: space-between;
`;

function App() {
  return (
    <Wrapper>
      <InputWrapper>
        <TextField variant="filled" id="standard-basic" label="Name" />
        <TextField variant="filled" id="multiline-basic" label="Stuff" multiline rows="4" />
        <Button variant="contained" color="primary">
          Skicka in!
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}

export default App;
