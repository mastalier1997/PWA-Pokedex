import React from 'react';
import './Cell.css';
import {ClassDeclaration as pokemon} from "@babel/types";

function Cell({ pokemon }) {
    let id = pokemon.name;
    return (
        <a href={"Detail.js?id= " + id } onclick="passID()">
        <div className="Cell">
            <div className="Cell_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Cell_name">
                {pokemon.name}
            </div>
        </div>
        </a>
    );
}
function passID(){
    return(
        pokemon.id
        );
}
export default Cell;
