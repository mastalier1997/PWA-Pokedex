import React from "react";
import "./navbar.css";
import { Button, Form, FormControl } from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";
import {Link} from "react-router-dom";

function Navbar1(props) {
  // Contains Input of User
  var textInput;

  let dropShow={};
  let curURL = window.location.href.toString();
  if(curURL.includes("Detail")){
    dropShow.visibility = 'hidden';
  }

  // Filters Pokemon for given Search Query
  function handleChange(event) {
    var pokeName = textInput.value.toLowerCase();
    const pokemonData = props.pokemonData.filter(
      (pokemon) =>
        pokemon.id === parseInt(pokeName, 10) || pokemon.name.includes(pokeName)
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

            <div class="dropdown" style={dropShow}>
              <button type="button" onClick={handleButtonClick} class="dropbtn">
                Select Pokemon Type
              </button>
              <div id="dropdown" class="dropdown-content">
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
