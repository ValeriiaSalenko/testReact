import React from 'react';
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.name}</strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
        <div>tet</div>
    </div>
  );
};

export default PostItem;
