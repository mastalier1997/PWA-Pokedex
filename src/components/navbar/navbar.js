import React from "react";
import "./navbar.css";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/lib/Navbar";

function Navbar1(props) {
  var textInput = "";

  function handleChange(event) {
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
/*
<Link to={`/Detail/${pokemon.id}/`}>
            <div className="Cell_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Cell_name">
                {pokemon.name}
            </div>
            </Link> */
