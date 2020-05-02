import React, {useState, useEffect} from 'react';
import './Detail.css';
import {ClassDeclaration as pokemon} from "@babel/types";
import Card from "./Card";


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

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
        <div className="Detail">
            <div className="Detail_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Detail_name">
                {pokemon.name}
            </div>
            <div className="Detail_type">
                <Card
                    types={pokemon.types}
                />
            </div>

        </div>
    );
}


export default Detail;

