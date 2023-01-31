import React from 'react';
import PostItem from '../PostItem/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import * as S from './PostList.styles';

type PostListProps = {
  posts: PostListItemType[];
};

function PostList({ posts }: PostListProps) {
  return (
    <S.Container>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </S.Container>
  );
}

export default PostList;
