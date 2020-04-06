import React, { useState, useEffect } from 'react';
import Cell from './components/cell/Cell_Exp';
import { getPokemon, getAllPokemon } from './data/data';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])


  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Cell key={i} pokemon={pokemon} />
              })}
            </div>
          </>
        )}
      </div>
  );
}

export default App;
