import React, { ReactNode } from 'react';
import * as S from './CategoryItem.styles';

export type CategoryItemProps = {
  children: ReactNode;
  className?: string;
  to: string;
  active: boolean;
};

const CategoryItem = ({ children, active, to }: CategoryItemProps) => {
  return (
    <S.Container>
      <S.StyledLlink active to={to}>
        {children}
      </S.StyledLlink>
    </S.Container>
  );
};

export default CategoryItem;
