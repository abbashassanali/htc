import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 72px;
  background-color: white;
  display: flex;
  padding-left: 20px;
  align-items: center;
  box-shadow: 0px 10px 2px 0px rgba(255, 255, 255, 1);
`;

const Heading = styled.h2`
  font-weight: 200;
`;
const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
      <Heading>co.hub19</Heading>
      </Link>
    </Wrapper>
  );
};

export default Header;
