import React, {useState} from 'react';
import './Detail.css';

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
Detail(id)

function Detail(pokemon) {
    return (
            <div className="Detail">
                <div className="Detail_img">
                    <p>TEST</p>
                </div>
                <div className="Detail_name">
                    {pokemon.name}
                </div>
            </div>
    );
}

async function getPoke(id) {
    console.log(id);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();
    console.log(json);
}
export default Detail;
