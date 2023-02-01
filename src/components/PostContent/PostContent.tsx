import React from 'react';
import * as S from './PostContent.styles';

type PostContentProps = {
  html: string;
};

export default function PostContent({ html }: PostContentProps) {
  return <S.MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
}
