import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { PageWrapper } from './styles';

const Wrapper = styled(PageWrapper)`
  margin-top: 32px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const IndexPage = () => {
  return (
    <Wrapper>
      <Button variant="contained" color="primary" component={Link} to="/have">
        Jag har material
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/have">
        Jag kan tillverka
      </Button>
      <Button variant="contained" color="primary" component={Link} to="/have">
        Jag behöver produkter
      </Button>
    </Wrapper>
  );
};

export default IndexPage;
