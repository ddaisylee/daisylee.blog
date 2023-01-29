import React from 'react';
import { PostFrontmatterType } from 'types/PostItem.types';
import * as S from './PostItem.styles';

type PostItemProps = PostFrontmatterType & { link: string };

function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostItemProps) {
  return (
    <S.Container to={link}>
      <S.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <S.PostItemContent>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.Category>
          {categories.map(category => (
            <S.CategoryItem key={category}>{category}</S.CategoryItem>
          ))}
        </S.Category>
        <S.Summary>{summary}</S.Summary>
      </S.PostItemContent>
    </S.Container>
  );
}

export default PostItem;
