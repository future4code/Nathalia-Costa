import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    const newPostsList = [newPost, ...postsList];

    setPostsList(newPostsList);
    setInputValue('')
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  const mapPostList = () => postsList.map(post => {
    //Retorna o array de post
      return (
        <Post
          key={post.id}
          post={post}
          toggleLike={toggleLike}
          deletePost={deletePost}
        />
      );
  })

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {postsList.length === 0 ? '' : <p>Quantidade de post: {postsList.length}</p>}
      {postsList.length === 0 ? <p>Nenhum post</p> : mapPostList()}
    </div>
  );
};

export default App;
