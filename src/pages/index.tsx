//TypeScript는 기본적으로 '변수: 타입'과 같이 변수와 함수의 타입을 정의해서 사용합니다.
//FunctionComponent: 리액트에서 제공하는 함수형 컴포넌트를 위한 타입
import React, {FunctionComponent} from 'react';
import Text from 'components/Text';
//Gatsby Link API를 이용하면 a 태그를 이용하는 것보다 성능적으로 우수합니다.
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Main/Introduction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%
`
const IndexPage: FunctionComponent = function(){
    //Text 컴포넌트에 string 타입의 props를 넘겨주고 있습니다.
    return (
        <Container>
            <GlobalStyle />
            <Introduction />
        </Container>
    )
}

export default IndexPage;