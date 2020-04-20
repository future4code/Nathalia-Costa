import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CadPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/eiv3YHF.jpg" 
          nome="Nathália Costa" 
          descricao="Oi, eu sou aluna da Labenu. Se aventurando em Desenvolvimento Web Full-Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div  className="page-section-container">
        <CardPequeno
        imagem="https://imgur.com/CRzcopf.jpg"
        texto="Email: nthliacc@labenu.com"
        />
        <CardPequeno
        imagem="https://imgur.com/OKgVNyB.jpg"
        texto="Endereço: Rua Labenu, F4."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://imgur.com/W3TRR7U.jpg" 
          nome="PósFAR" 
          descricao="Coordenadora de cursos de Pós-Graduações" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
