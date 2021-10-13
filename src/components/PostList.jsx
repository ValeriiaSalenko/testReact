import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return <h1 style={{textAlign: 'center'}}>Pusto</h1>
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts?.map((post, index) => <PostItem remove={remove} post={post} key={index + 1}/>)}
    </div>
  );
};

export default PostList;
