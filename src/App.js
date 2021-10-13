import './App.css';
import PostList from "./components/PostList";
import {useMemo, useRef, useState} from "react";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PosstFilter from "./components/PosstFilter";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, name: 'JS 1', description: 'JS description4'},
    {id: 2, name: 'JS 4', description: 'JS description2'},
    {id: 3, name: 'JS 3', description: 'JS description3'},
    {id: 4, name: 'JS 2', description: 'JS description1'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p =>p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr style={{margin: '15px 0'}}/>

      <PosstFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={sortedAndSearchPosts} title="List" remove={removePost}/>
    </div>
  );
}

export default App;
