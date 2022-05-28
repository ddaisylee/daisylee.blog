import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import {PostListItemType} from 'types/PostItem.types'

//개별 PostItem 컴포넌트에 전달되는 props 더미 데이터
// const POST_ITEM_DATA = {
//   title: 'Post Item Title',
//   date: '2020.01.29.',
//   categories: ['Web', 'Frontend', 'Testing'],
//   summary:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//   thumbnail:
//     'https://images.unsplash.com/photo-1629757509637-7c99379d6d26?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770',
//   link: 'https://www.google.co.kr/',
// }


//props의 타입 지정
type PostListProps = {
  //PostItem 컴포넌트에 props로 넘겨줄 배열
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: tomato;
  
  @media(max-width: 768px){
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
  <PostListWrapper>
    {posts.map(
      ({
      node: { id, frontmatter }
    }: PostListItemType) => (
      <PostItem {...frontmatter}
       link="https://www.google.co.kr" 
       key={id} 
       />
      )
    )}
  </PostListWrapper>
  )
}

export default PostList