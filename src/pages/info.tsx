import React, { FunctionComponent } from 'react';
//graphql을 사용하기 위해 import합니다.
import { graphql } from 'gatsby';
// CSS 정의 및 글로벌 스타일을 지정하기 위해 컴포넌트의 함수를 불러옵니다.
import { Global, css } from '@emotion/react';
//CSS 정의가 아닌 Styled Component를 생성하기 위해 함수를 불러옵니다.
import styled from '@emotion/styled';

//(2) 응답 받은 결과에 대한 타입을 지정해줍니다.
//data라는 키의 값으로 결과가 전달받는 것에 주의합니다.
type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
};

//(3) 함수의 parameter 부분에서 구조 분해 할당을 이용해 값을 추출해 바로 사용해줍니다.
const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  );
};

export default InfoPage;

//(1) 원하는 데이터에 대한 쿼리를 변수에 담아 요청을 보냅니다.
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

//1. 컴포넌트의 props 값으로 전달할 CSS를 정의하는 방법
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`;

//Styled Component를 생성한 방식에서 props를 받아 처리하는 방법: disable이라는 prop으로 실습했습니다.

//2. Styled Component를 만들어서 컴포넌트처럼 사용하는 방법
//TypeScript에서는 props의 타입을 지정해줍니다.
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: teal;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`;

//3. 스타일을 객체에 담아 사용하는 방법
//TypeScript에서는 props의 타입을 지정해줍니다.
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'tomato',
  textDecoration: disable ? 'line-through' : 'none',
}));
