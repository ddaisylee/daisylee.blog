import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'styles/GlobalStyle';
import { Footer } from 'components/@common';

type BaseTemplateProps = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default BaseTemplate;
