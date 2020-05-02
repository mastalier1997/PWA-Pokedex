import React from 'react';
import './Cell.css';
import {ClassDeclaration as pokemon} from "@babel/types";
import {Link} from 'react-router-dom';
import Detail from "../../Detail";

function Cell({ pokemon }) {
    let id = pokemon.name;
    return (
        <div className="Cell">
            <Link to={`/Detail/${pokemon.id}/`}>
            <div className="Cell_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Cell_name">
                {pokemon.name}
            </div>
            </Link>
        </div>

    );
}

export default Cell;
