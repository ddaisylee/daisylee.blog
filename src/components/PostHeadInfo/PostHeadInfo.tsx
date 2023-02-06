import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './PostHeadInfo.styles';
import { PostHeadInfoProps } from 'types/PostHeadInfo.types';

export default function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps) {
  const goBackPage = () => window.history.back();

  return (
    <S.PostHeadInfoWrapper>
      <S.PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </S.PrevPageIcon>
      <S.Title>{title}</S.Title>
      <S.PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </S.PostData>
    </S.PostHeadInfoWrapper>
  );
}
