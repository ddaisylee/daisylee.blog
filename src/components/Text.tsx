import React, {FunctionComponent} from "react";

//함수형 컴포넌트에 제네릭을 추가함으로써 해당 컴포넌트에
//props를 넘길 때 정해진 타입의 데이터를 넘길 수 있도록 합니다.
//TextProps라는 제네릭을 추가했습니다.
type TextProps ={
    text: string
}

const Text: FunctionComponent<TextProps> = function({text}){
    return <div>{text}</div>
}

export default Text