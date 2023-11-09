import imgRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './componentes/Characters';

function App() {

  let [characters, setCharacters] = useState(null);

  let reqApi = async () => {

    let api = await fetch("https://rickandmortyapi.com/api/character");
    let apiJson = await api.json();

    setCharacters(apiJson.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (<Characters charactersAtributo={characters} setCharacters={setCharacters}></Characters>)
        : (
          <>
          <img src={imgRickMorty} alt="Rick & Morty" className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
