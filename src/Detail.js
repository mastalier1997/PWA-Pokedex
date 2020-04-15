import React, {useState} from 'react';
import './Detail.css';
import {ClassDeclaration as pokemon} from "@babel/types";

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

function Details(pokemon) {
    const id = urlParams.get('id')

    return (
            <div className="Cell">
                <div className="Cell_img">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className="Cell_name">
                    {pokemon.name}
                </div>
            </div>
    );
}
