import React, { useMemo } from 'react';
import PostItem from '../PostItem/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import * as S from './PostList.styles';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

export default function PostList({ selectedCategory, posts }: PostListProps) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );
  return (
    <S.Container>
      {postListData.map(
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
