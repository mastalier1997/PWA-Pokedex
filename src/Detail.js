import React, {useState} from 'react';
import './Detail.css';
import {ClassDeclaration as pokemon} from "@babel/types";

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function Detail({pokemon}) {
    return (
            <div className="Detail">
                <div className="Detail_img">
                </div>
                <div className="Detail_name">
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
