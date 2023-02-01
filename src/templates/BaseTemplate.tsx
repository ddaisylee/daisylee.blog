import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'styles/GlobalStyle';
import { Footer } from 'components/@common';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Daisylee Blog</title>

        <meta
          name="description"
          content="주니어 프론트엔드 개발자 Daisy의 기술 블로그입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default BaseTemplate;
