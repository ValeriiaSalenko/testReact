import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {

  const [post, setPost] = useState({titlePost: '', descriptionPost: ''})
  // const bodyInputDescriptionRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      name: post.titlePost,
      description: post.descriptionPost,
    }
    create(newPost)
    setPost({titlePost: '', descriptionPost: ''})
    // console.log(bodyInputDescriptionRef.current.value)
  };

  return (
    <form action="">
      {/*Управляемый компонет*/}
      <MyInput type="text"
               placeholder="title..."
               value={post.titlePost}
               onChange={e => setPost({...post, titlePost: e.target.value})}
      />

      <MyInput type="text"
               placeholder="description..."
               value={post.descriptionPost}
               onChange={e => setPost({...post, descriptionPost: e.target.value})}
      />

      {/*не управляемый компонент */}

      {/*<MyInput type="text"*/}
      {/*         placeholder="description..."*/}
      {/*         ref={bodyInputDescriptionRef}*/}
      {/*/>   */}

      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};

export default PostForm;
