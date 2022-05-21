import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding: 3rem 0;
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.5;
`
//line-height: 행간

const Footer: FunctionComponent = function(){
    return(
        <FooterWrapper>
            Thank You for Visiting My Blog, Have a Good Day🌼❤️
            <br />© 2022 Developer DaisyLee, Powered By Gatsby.
        </FooterWrapper>
    )
}

export default Footer;