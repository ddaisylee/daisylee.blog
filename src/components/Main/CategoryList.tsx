import React, {FunctionComponent, ReactNode} from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

/*
받아올 데이터 리스트
{
    "selectedCategory": "Web",
    categoryList: {
        "All": 5,
        "Web": 3,
        "Mobile": 2
    }
}
*/

//CategoryItem에서 사용할 prop의 타입을 지정합니다.
type CategoryItemProps = {
    active: boolean;
}

//Link 컴포넌트에 전달해주는 props의 타입을 지정합니다.
//&: 두 타입을 하나로 합치는 intersection 타입
type GatsbyLinkProps = {
    children: ReactNode,
    className?: string,
    to: string,
} & CategoryItemProps

/*
active prop을 분리한 이유는 크게 2가지가 있습니다.
1. Link 컴포넌트는 active라는 prop을 받도록 설정되어 있지 않아서 전달하면 에러가 발생합니다.
2. CategoryItem 컴포넌트는 active라는 prop 외에 다른 props는 사용하지 않습니다.
*/

//index.tsx에서 받아온 props값의 타입을 지정합니다.
export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        [key: string]: number
    }
}

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;
`

//props로 받아온 값을 이용해 <Link> 컴포넌트를 생성합니다.
const CategoryItem = styled(({active, ...props}:GatsbyLinkProps)=>(
    <Link {...props} />
))<CategoryItemProps>`
    margin-right: 20px;
    padding: 5px 0;
    font-size: 18px;
    font-weight: ${({active})=> active ? '800' : '400'};
    cursor: pointer;

    &:last-of-type {
    margin-right: 0;
}
`
//Object.entries(객체)는 [key, value]쌍의 배열로 반환합니다.
//배열로 반환하기 때문에 map 메서드를 사용해 순차적으로 나열할 수 있습니다.
const CategoryList: FunctionComponent<CategoryListProps> = function({
    selectedCategory,
    categoryList,
}){
    return(
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count])=>(
                <CategoryItem 
                    to={`?category=${name}`}
                    active={name === selectedCategory}
                    key={name}
                    >
                    #{name}({count})
                </CategoryItem>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList;