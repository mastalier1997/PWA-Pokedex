import React, { useState, useEffect } from "react";
import "./Detail.css";
import Card from "./Card";
import Navbar1 from "../navbar/navbar";
import {getPokemon} from "../../data/data";
import {Link} from "react-router-dom";


function Detail(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [species, specieObject] = useState(null);
  const [evolution, evolutionObject] = useState(null);
  const [evol_img, SetEvol_img] = useState(null);
  const [prev_evol_img, SetPrevEvol_img] = useState(null);

  async function fetchPokemon(id) {
    //gets Pokemon Infos
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
    //gets Pokemon flavor_text
    const result2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res2 => res2.json());
    setPokemon(result);
    specieObject(result2);

    const evo_url = Object.values(result2.evolution_chain).pop();
    let result3 = await fetch(`${evo_url}`);
    let json3 = await result3.json();
    evolutionObject(json3);
    setIsLoading(false);
  }


  useEffect(() => {
    fetchPokemon(props.match.params.id);
  }, []);

  if (isLoading) return <p hidden>Loading</p>;


  let id_str = "" + pokemon.id;
  let zero = "000";
  let pokemon_id = zero.substring(0, zero.length - id_str.length) + id_str;


  // Link to Image in Detail View
  let imgLink =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon_id +".png";

  let notPic;
  if (pokemon_id==="undefined"||pokemon_id==null){
      notPic=<p>test</p>;
  }else{
    notPic= <img
        className={"sprite"}
        src={imgLink}
        alt="<    Image could not be loaded    >"
    />
  }


  if (pokemon_id==="undefined") imgLink=null;

  let flavor;
  for(let i = 0; i < species.flavor_text_entries.length; i++){
    if(species.flavor_text_entries[i].language.name === "en"){
      flavor = species.flavor_text_entries[i];
    }
  }

  const evo = Object.values(evolution.chain.evolves_to).pop();
  let prev_evo;
  let next_evo;
  let next_evo_text;


  if(((evolution.chain.evolves_to).length > 0)){
    if((evo.evolves_to).length > 0){
      if(evo.species.name === (pokemon.name)){
        next_evo = Object.values(evo.evolves_to).pop();
        next_evo_text = next_evo.species.name;
      }else if(Object.values(evo.evolves_to).pop().species.name === pokemon.name){
        next_evo_text = "-";
      }else{
        next_evo = Object.values(evolution.chain.evolves_to).pop();
        next_evo_text = next_evo.species.name;
      }
    }else{
      if(evo.species.name === (pokemon.name)){
        next_evo_text = "-";
      }else{
        next_evo = Object.values(evolution.chain.evolves_to).pop();
        next_evo_text = next_evo.species.name;
      }
    }
    if(((species.evolves_from_species) === null)){
      prev_evo = "-";
    }else{
      prev_evo = species.evolves_from_species;
    }
  }else{
    next_evo_text = "-";
    prev_evo = "-";
  }

  //Gets Pokemon evolution image
  async function fetchNextEvoImg(id) {

    const img_result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
    SetEvol_img(img_result.sprites.front_default);
  }
  async function fetchPrevEvoImg(id) {

    const img_result2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res2 => res2.json());
    SetPrevEvol_img(img_result2.sprites.front_default);
  }
  
  function loadNextPage() {
    let url = window.location.href.toString();
    let url2 = url.substr(0,url.indexOf("Detail"));
    window.location.assign(url2+'Detail/'+next_evo_text);
  }

  function loadPrevPage() {
    let url = window.location.href.toString();
    let url2 = url.substr(0,url.indexOf("Detail"));
    window.location.assign(url2+'Detail/'+prev_evo.name);
  }

  fetchNextEvoImg(next_evo_text);
  fetchPrevEvoImg(prev_evo.name)
  return (
    <>
      <Navbar1/>
      <div className="parent">
        <div className="div1">

          {notPic}

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
          <Link to={`/Detail/${prev_evo.name}`} /*onClick={loadPrevPage}*/>
            <img src={prev_evol_img} alt="" />
            <p>{prev_evo.name}</p>
          </Link>
          <p id={"bold_words"}>Next evolutions: </p>
          <Link to={`/Detail/${next_evo_text}`} /*onClick={loadNextPage}*/>
            <img src={evol_img} alt="" />
            <p>{next_evo_text}</p>
          </Link>
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
