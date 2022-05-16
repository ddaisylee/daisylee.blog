import React, {FunctionComponent} from 'react';
//graphql을 사용하기 위해 import합니다.
import { graphql } from 'gatsby';
import Text from 'components/Text';

//(2) 응답 받은 결과에 대한 타입을 지정해줍니다.
//data라는 키의 값으로 결과가 전달받는 것에 주의합니다.
type InfoPageProps = {
    data:{
        site:{
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
};

//(3) 함수의 parameter 부분에서 구조 분해 할당을 이용해 값을 추출해 바로 사용해줍니다.
const InfoPage: FunctionComponent<InfoPageProps> = function({
    data:{
        site:{
            siteMetadata:{title, description, author}
        },
    },
}){
    return(
        <div>
            <Text text={title} />
            <Text text={description} />
            <Text text={author} />
        </div>
    )
}

export default InfoPage;

//(1) 원하는 데이터에 대한 쿼리를 변수에 담아 요청을 보냅니다.
export const metadataQuery = graphql`
{
    site{
		siteMetadata{
            title
            description
            author
        }
    }
}
`