import React, {useState, useEffect} from 'react';
import './Detail.css';
import {ClassDeclaration as pokemon} from "@babel/types";
import Card from "./Card";


function Detail(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);

    async function fetchPokemon(id) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const json = await result.json();
        setPokemon(json);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPokemon(props.match.params.id)
    })

    if (isLoading) return <p>Loading</p>

    return (
        <>
            <div className="parent">
                <div className="div1">
                    <img src={pokemon.sprites.front_default} width="500" height="500" alt="" />
                </div>
                <div className="div2">
                  <p>#{pokemon.id}</p>
                    {pokemon.name}
                    <Card
                        types={pokemon.types}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        abilities={pokemon.abilities}
                    />



                </div>
            </div>

        </>
    );
}


export default Detail;

