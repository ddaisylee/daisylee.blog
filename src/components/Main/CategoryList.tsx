import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

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
//Object.entries(객체)는 [key, value]쌍의 배열로 반환합니다.
//배열로 반환하기 때문에 map 메서드를 사용해 순차적으로 나열할 수 있습니다.
const CategoryList: FunctionComponent<CategoryListProps> = function({
    selectedCategory,
    categoryList,
}){
    return(
        <CategoryListWrapper>
            {Object.entries(categoryList).map(([name, count])=>(
                <div key={name}>
                    #{name}({count})
                </div>
            ))}
        </CategoryListWrapper>
    )
}

export default CategoryList;