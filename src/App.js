import React from 'react';
import PokemonList from './component/PokemonList';
import './App.css'; // Import global styles

const App = () => {
    return (
        <div className="app">
            <h1>Pokémon List</h1>
            <PokemonList />
        </div>
    );
};

export default App;