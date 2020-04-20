import React from 'react';
import './App.css';
import { Etapa1 } from './components/etapa1';
import { Etapa2 } from './components/etapa2';
import { Etapa3 } from './components/etapa3';
import { Etapa4 } from './components/etapa4';

class App extends React.Component {
  render() {
    return (
      <div>
        <Etapa1 />
        <Etapa2 />
        <Etapa3 />
        <Etapa4 />
      </div>
    );
  }
}

export default App;
