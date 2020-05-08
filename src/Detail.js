import React, {useState, useEffect} from 'react';
import './Detail.css';
import Card from "./Card";


function Detail(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const [species, specieObject] = useState(null);

    async function fetchPokemon(id) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const json = await result.json();
        setPokemon(json);
        setIsLoading(false);
    }
   /* async function fetchSpecies(id){
        const result2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const json2 = await result2.json();
        specieObject(json2);
    }
*/
    useEffect(() => {
        fetchPokemon(props.match.params.id)
     //   fetchSpecies(props.match.params.id)
    })

    if (isLoading) return <p>Loading</p>

    let id_str = "" + pokemon.id;
    let zero = "000";
    let pokemon_id = zero.substring(0, zero.length - id_str.length) + id_str ;

//                    {species.map(species => <div>{species.flavor_text_entries}</div>)}
    return (
        <>
            <div className="parent">
                <div className="div1">
                    <img className={"sprite"} src={pokemon.sprites.front_default}/>
                </div>
                <div className="div2">
                  <a id={"bold_words"}>National-ID: #</a>{pokemon_id}
                  <br/>
                    <a id={"bold_words"}>Name: </a>{pokemon.name}


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

