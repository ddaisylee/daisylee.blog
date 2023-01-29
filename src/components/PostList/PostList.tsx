import React, { FunctionComponent } from 'react';
import PostItem from '../PostItem/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import * as S from './PostList.styles';

export type PostType = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        publicURL: string;
      };
    };
  };
};

//props의 타입 지정
type PostListProps = {
  //PostItem 컴포넌트에 props로 넘겨줄 배열
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <S.Container>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </S.Container>
  );
};

export default PostList;
