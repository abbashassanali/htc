import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import styled from 'styled-components';
import { PageWrapper } from './styles';

const Wrapper = styled(PageWrapper)`
  margin-top: 32px;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const IndexPage = () => {
  return (
    <Wrapper>
      <Box m={2.5}>
        <Button variant="contained" color="primary" component={Link} to="/have">
          I have material
        </Button>
      </Box>
      <Box m={2.5}>
        <Button variant="contained" color="primary" component={Link} to="/make">
          I’m a maker
        </Button>
      </Box>
      <Box m={2.5}>
        <Button variant="contained" color="primary" component={Link} to="/need">
          I need products
        </Button>
      </Box>
      <Box m={2.5}>
        <Button variant="contained" color="primary" component={Link} to="/info">
          More information
        </Button>
      </Box>
    </Wrapper>
  );
};

export default IndexPage;
