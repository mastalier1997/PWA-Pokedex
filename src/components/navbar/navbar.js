import React from "react";
import "./navbar.css";
import { Button, Form, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";

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
    const pokemonData = props.pokemonData.filter(
      (pokemon) =>
        pokemon.id === parseInt(textInput.value, 10) ||
        pokemon.name.includes(textInput.value)
    );
    props.onChange(pokemonData);
  }

  // Filters Pokemon for given Type
  function handleClick(e) {
    if (e.target.value === "all") {
      props.onChange(props.pokemonData);
    } else {
      const pokemonData = props.pokemonData.filter(
        (pokemon) =>
          pokemon.types[0].type.name === e.target.value ||
          pokemon.types[pokemon.types.length - 1].type.name === e.target.value
      );
      props.onChange(pokemonData);
    }
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
            <div class="dropdown">
              <button class="dropbtn">Select Pokemon Type</button>
              <div class="dropdown-content">
                <button value="all" onClick={(e) => handleClick(e)}>
                  All
                </button>
                <button value="normal" onClick={(e) => handleClick(e)}>
                  Normal
                </button>
                <button value="fighting" onClick={(e) => handleClick(e)}>
                  Fighting
                </button>
                <button value="flying" onClick={(e) => handleClick(e)}>
                  Flying
                </button>
                <button value="poison" onClick={(e) => handleClick(e)}>
                  Poison
                </button>
                <button value="ground" onClick={(e) => handleClick(e)}>
                  Ground
                </button>
                <button value="rock" onClick={(e) => handleClick(e)}>
                  Rock
                </button>
                <button value="bug" onClick={(e) => handleClick(e)}>
                  Bug
                </button>
                <button value="ghost" onClick={(e) => handleClick(e)}>
                  Ghost
                </button>
                <button value="steel" onClick={(e) => handleClick(e)}>
                  Steel
                </button>
                <button value="fire" onClick={(e) => handleClick(e)}>
                  Fire
                </button>
                <button value="water" onClick={(e) => handleClick(e)}>
                  Water
                </button>
                <button value="grass" onClick={(e) => handleClick(e)}>
                  Grass
                </button>
                <button value="electric" onClick={(e) => handleClick(e)}>
                  Electric
                </button>
                <button value="psychic" onClick={(e) => handleClick(e)}>
                  Psychic
                </button>
                <button value="ice" onClick={(e) => handleClick(e)}>
                  Ice
                </button>
                <button value="dragon" onClick={(e) => handleClick(e)}>
                  Dragon
                </button>
                <button value="dark" onClick={(e) => handleClick(e)}>
                  Dark
                </button>
                <button value="fairy" onClick={(e) => handleClick(e)}>
                  Fairy
                </button>
              </div>
            </div>

            <div className={"search-nav"}>
              <FormControl
                type="text"
                inputRef={(ref) => (textInput = ref)}
                placeholder={"Search by name or id"}
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
