import React, { FunctionComponent } from 'react';
import { PostFrontmatterType } from 'types/PostItem.types';
import * as S from './PostItem.styles';

//PostItem이 받아오는 props: 제목, 날짜, 카테고리, 요약, 썸네일, 링크
type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
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
};

export default PostItem;
