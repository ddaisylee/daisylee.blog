import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { PostHeadInfoProps } from 'components/PostHeadInfo/PostHeadInfo';
import PostHeadInfo from 'components/PostHeadInfo/PostHeadInfo';
import * as S from './PostHead.styles';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export default function PostHead({
  title,
  date,
  categories,
  thumbnail,
}: PostHeadProps) {
  return (
    <S.PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </S.PostHeadWrapper>
  );
}
