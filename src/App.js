import React from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a MarketCol!" />
    </div>
  );
}

export default App;