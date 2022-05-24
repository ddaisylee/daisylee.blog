import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

//Background 스타일링을 위한 컴포넌트
const Background = styled.div`
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #ffffff;
`

// 하위 컴포넌트에 flex로 정렬하기 위해 상위 컴포넌트인 Wrapper 생성
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 768px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        padding: 0 20px;
    }
`
const Subtitle = styled.div`
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`

const Title = styled.div`
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

const Introduction: FunctionComponent = function(){
    return(
        <Background>
            <Wrapper>
                <ProfileImage />
                <div>
                    <Subtitle>Nice to meet you!</Subtitle>
                    <Title>I'm Junior Frontend Developer Daisy.</Title>
                </div>
            </Wrapper>
        </Background>
    )
}

export default Introduction;