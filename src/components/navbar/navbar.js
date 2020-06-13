import React from "react";
import "./navbar.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { getPokemon } from "../../data/data";
import Navbar from "react-bootstrap/lib/Navbar";
import { Link } from "react-router-dom";

function Navbar1(props) {
  // Contains Input of User
  var textInput;

  // Remove dropdown & searchfield in details
  let dropShow = {};
  let searchField = {};
  let curURL = window.location.href.toString();
  if (curURL.includes("Detail")) {
    dropShow.visibility = "hidden";
    searchField.visibility = "hidden";
  }

  // Fetch pokemon details from api
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    return await _pokemonData;
  };

  // Filter pokemon by search value and load details for them
  async function filterAndLoadPokemon(pokeName) {
    let res = await props.searchResponse.results.filter(
      (pokemon) => pokemon.name.includes(pokeName) || pokemon.id === pokeName
    );

    return await loadPokemon(res);
  }

  // Handle Change on input field
  function handleChange(event) {
    var pokeName = textInput.value.toLowerCase();

    if (pokeName.length <= 0) {
      props.prevNextVisibility(true);
      props.onChange(props.pokemonData);
    } else {
      props.onLoading(true);
      filterAndLoadPokemon(pokeName).then(function (result) {
        props.onLoading(false);
        props.prevNextVisibility(false);
        props.onChange(result);
      });
    }
  }

  // Filters Pokemon for given Type
  function handleClick(e) {
    if (e.target.value === "all") {
      props.prevNextVisibility(true);
      props.onChange(props.pokemonData);
    } else {
      props.onLoading(true);
      e.persist(true);
      loadPokemon(props.searchResponse.results).then(function (result) {
        const pokemonData = result.filter(
          (pokemon) =>
            pokemon.types[0].type.name === e.target.value ||
            pokemon.types[pokemon.types.length - 1].type.name === e.target.value
        );
        props.onLoading(false);
        props.prevNextVisibility(false);
        props.onChange(pokemonData);
      });
    }
  }

  // Opens Dropdown Menu on Button Click
  function handleButtonClick() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <Navbar>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className={"form-div"}>
          <Form className={"form-inline"}>
            <Link to={`/`}>
              <label>Pokémon PWA</label>
            </Link>

            <div className="dropdown" style={dropShow}>
              <button
                type="button"
                onClick={handleButtonClick}
                className="dropbtn"
              >
                Select Pokemon Type
              </button>
              <div id="dropdown" className="dropdown-content">
                <button
                  type="button"
                  value="all"
                  onClick={(e) => handleClick(e)}
                >
                  All
                </button>
                <button
                  type="button"
                  value="bug"
                  onClick={(e) => handleClick(e)}
                >
                  Bug
                </button>
                <button
                  type="button"
                  value="dark"
                  onClick={(e) => handleClick(e)}
                >
                  Dark
                </button>
                <button
                  type="button"
                  value="dragon"
                  onClick={(e) => handleClick(e)}
                >
                  Dragon
                </button>
                <button
                  type="button"
                  value="electric"
                  onClick={(e) => handleClick(e)}
                >
                  Electric
                </button>
                <button
                  type="button"
                  value="fairy"
                  onClick={(e) => handleClick(e)}
                >
                  Fairy
                </button>
                <button
                  type="button"
                  value="fighting"
                  onClick={(e) => handleClick(e)}
                >
                  Fighting
                </button>
                <button
                  type="button"
                  value="fire"
                  onClick={(e) => handleClick(e)}
                >
                  Fire
                </button>
                <button
                  type="button"
                  value="flying"
                  onClick={(e) => handleClick(e)}
                >
                  Flying
                </button>
                <button
                  type="button"
                  value="ghost"
                  onClick={(e) => handleClick(e)}
                >
                  Ghost
                </button>
                <button
                  type="button"
                  value="grass"
                  onClick={(e) => handleClick(e)}
                >
                  Grass
                </button>
                <button
                  type="button"
                  value="ground"
                  onClick={(e) => handleClick(e)}
                >
                  Ground
                </button>
                <button
                  type="button"
                  value="ice"
                  onClick={(e) => handleClick(e)}
                >
                  Ice
                </button>
                <button
                  type="button"
                  value="normal"
                  onClick={(e) => handleClick(e)}
                >
                  Normal
                </button>

                <button
                  type="button"
                  value="poison"
                  onClick={(e) => handleClick(e)}
                >
                  Poison
                </button>
                <button
                  type="button"
                  value="psychic"
                  onClick={(e) => handleClick(e)}
                >
                  Psychic
                </button>
                <button
                  type="button"
                  value="rock"
                  onClick={(e) => handleClick(e)}
                >
                  Rock
                </button>
                <button
                  type="button"
                  value="steel"
                  onClick={(e) => handleClick(e)}
                >
                  Steel
                </button>
                <button
                  type="button"
                  value="water"
                  onClick={(e) => handleClick(e)}
                >
                  Water
                </button>
              </div>
            </div>

            <div className={"search-nav"} style={searchField}>
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
