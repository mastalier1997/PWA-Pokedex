import React from 'react';
import './Cell.css';

function Cell({ pokemon }) {
    return (
        <a href={"Detail.js"}>
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

export default Cell;
