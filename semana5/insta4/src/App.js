import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    boxs: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1"
      },
      {
        nomeUsuario:"paula",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        nomeUsuario: "paulinhaaa",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3"
      }
    ]
  };
  render() {

    const listaDePost = this.state.boxs.map((post) => {
      return (
        <Post key={post}> 
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        </Post>
      )
    })

    return (
      <div className={'app-container'}>
        <div>{listaDePost}</div>
      </div>
    );
  }
}

export default App;
