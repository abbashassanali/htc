import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 16px;
`;

export const InputWrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const PostWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  background-color: #A3C4C9;
  box-shadow: 0.2px 1px 2px 0.2px #A3C4C9;
  max-width: 300px;
  min-width: 300px;
  margin: 8px;
  padding: 8px;
`;
