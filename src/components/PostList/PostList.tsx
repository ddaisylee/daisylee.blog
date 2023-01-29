import React from 'react';
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

type PostListProps = {
  posts: PostListItemType[];
};

function PostList({ posts }: PostListProps) {
  return (
    <S.Container>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </S.Container>
  );
}

export default PostList;
