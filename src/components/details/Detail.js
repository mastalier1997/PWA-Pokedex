import React, { useState, useEffect } from "react";
import "./Detail.css";
import Card from "./Card";
import Navbar1 from "../navbar/navbar";
import {getPokemon} from "../../data/data";


function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [species, specieObject] = useState(null);
  const [evolution, evolutionObject] = useState(null);

  async function fetchPokemon(id) {
    //gets Pokemon Infos
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await result.json();
    //gets Pokemon flavor_text
    const result2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const json2 = await result2.json();
    setPokemon(json);
    specieObject(json2);
    const evo_url = Object.values(json2.evolution_chain).pop();
    let result3 = await fetch(`${evo_url}`);
    let json3 = await result3.json();
    evolutionObject(json3);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchPokemon(props.match.params.id);
  });

  if (isLoading) return <p>Loading</p>;


  let id_str = "" + pokemon.id;
  let zero = "000";
  let pokemon_id = zero.substring(0, zero.length - id_str.length) + id_str;


  // Link to Image in Detail View
  const imgLink =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon_id +".png";

  const flavor = Object.values(species.flavor_text_entries).pop();

  const evo = Object.values(evolution.chain.evolves_to).pop();
  let evo2;
  let evo22;
  let evo1;

  if(((evolution.chain.evolves_to).length > 0)){


    if((evo.evolves_to).length > 0){
      if(evo.species.name === (pokemon.name)){
        evo2 = Object.values(evo.evolves_to).pop();
        evo22 = evo2.species.name;
      }else if(Object.values(evo.evolves_to).pop().species.name === pokemon.name){
        evo22 = "-";
      }else{
        evo2 = Object.values(evolution.chain.evolves_to).pop();
        evo22 = evo2.species.name;
      }
    }else{
      if(evo.species.name === (pokemon.name)){
        evo22 = "-";
      }else{
        evo2 = Object.values(evolution.chain.evolves_to).pop();
        evo22 = evo2.species.name;
      }
    }
    if(((species.evolves_from_species) === null)){
      evo1 = "-";
    }else{
      evo1 = Object.values(species.evolves_from_species.name);
    }
  }else{
    evo22 = "-";
    evo1 = "-";
  }

  return (
    <>
      <Navbar1/>
      <div className="parent">
        <div className="div1">

          <img
            className={"sprite"}
            src={imgLink}
            alt="<    Image could not be loaded    >"
          />

        </div>
        <div className="div2">
          <a id={"bold_words"}>National-ID: #</a>
          {pokemon_id}
          <br />
          <a id={"bold_words"}>Name: </a>
          {pokemon.name}
          <p>
            {flavor.flavor_text}
          </p>
          <p id={"bold_words"}>Previous evolutions: </p>
          <p>{evo1}</p>
          <p id={"bold_words"}>Next evolutions: </p>
          <p>{evo22}</p>

        </div>
        <div className="div3">
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
