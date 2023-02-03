import React from 'react';
import * as S from './CategoryList.styles';
import CategoryItem from 'components/CategoryItem/CategoryItem';

export type CategoryListProps = {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
};

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
