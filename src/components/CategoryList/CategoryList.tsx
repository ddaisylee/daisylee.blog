import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as S from './CategoryList.styles';

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

function CategoryList({ selectedCategory, categoryList }: CategoryListProps) {
  return (
    <S.Container>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </S.Container>
  );
}

export default CategoryList;
