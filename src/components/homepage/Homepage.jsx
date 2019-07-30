import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Homepage = () => {
  return (
      <Container>
        <h1>Party Planner</h1>
      </Container>
  );
};

export default Homepage;