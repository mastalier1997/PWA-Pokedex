import React, { useState } from "react";
import "./navbar.css";
import { Button, Form, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";
import { getPokemon, getAllPokemon } from "../../data/data";

function Navbar1(props) {
  /*
  TODO: Alle Pokemon von API beziehen und als Promise Array
        in allPokemonData laden.
        
  const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";
  const allPokemonDataPromise = getAllPokemon(pokemonURL);
  allPokemonDataPromise.array.forEach(element => {
    
  });
  let allPokemonData;
  const loadPokemon = async (data) => {
    allPokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
  }; */

  // Contains Input of User
  var textInput;

  // Filters Pokemon for given Search Query
  function handleChange(event) {
    // loadPokemon(allPokemonDataPromise.results);
    const pokemonData = props.pokemonData.filter((pokemon) =>
      pokemon.name.includes(textInput.value)
    );
    props.onChange(pokemonData);
  }

  return (
    <Navbar>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className={"form-div"}>
          <Form className={"form-inline"}>
            <label>Pokémon PWA</label>
            <div className={"search-nav"}>
              <FormControl
                type="text"
                inputRef={(ref) => (textInput = ref)}
                placeholder={"Search by name"}
                onChange={handleChange}
              />
              <Button type={"submit"}>
                <i className="fa fa-search"></i>
              </Button>
            </div>
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
