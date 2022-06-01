//TypeScript는 기본적으로 '변수: 타입'과 같이 변수와 함수의 타입을 정의해서 사용합니다.
//FunctionComponent: 리액트에서 제공하는 함수형 컴포넌트를 위한 타입
import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Main/Introduction';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
//PostList 컴포넌트로 옮긴 데이터를 불러옵니다.
import PostList from 'components/Main/PostList';
import { graphql } from 'gatsby';
import { PostListItemType } from 'types/PostItem.types';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import queryString, { ParsedQuery } from 'query-string';

//categoryList props에 전달할 더미 데이터 생성
const CATEGORY_LIST = {
    All: 5,
    Web: 3,
    Mobile: 2
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

//쿼리로 받아온 데이터 타입을 지정합니다.
type IndexPageProps = {
  location: {
    search: string
  }
    data: {
      allMarkdownRemark: {
        edges: PostListItemType[]
      }
      file: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }

const IndexPage: FunctionComponent<IndexPageProps> = function({
  location: {search},
    data: {
        allMarkdownRemark: { edges },
        file: {
          childImageSharp: {gatsbyImageData}
        }
    },
}){
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory : string = 
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category
    return (
        <Container>
            <GlobalStyle />
            <Introduction profileImage={gatsbyImageData}/>
            <CategoryList selectedCategory={selectedCategory} categoryList={CATEGORY_LIST}/>
            <PostList posts={edges}/>
            <Footer />
        </Container>
    )
}

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`