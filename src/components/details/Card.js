import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Types = null /*({ types, height, weight, abilities}) => {
    return (
        <div className="card">

            <footer className="card-footer">
                <a id={"bold_words"}>Type: </a>
                {types.map((item, index) =>
                    <span key={index}>
                        <a  style={{background: "rgba(0, 0, 0, 0.2)"}}>{item.type.name}</a> <a/>
                    </span>
                )}

            </footer>
            <div className="card">
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-half">
                            <a id={"bold_words"}>Height: </a>
                             {height / 10} m <br/>
                            <a id={"bold_words"}>Weight: </a>
                            {weight / 10} kg
                        </div>
                        <div className="abilities">
                            <p id={"bold_words"}>Abilities: </p>
                            <list>
                               <ul> {abilities.map((abilities, index) => {
                                return <p key={index}>{abilities.ability.name}</p>
                            })}</ul>
                            </list>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

Types.propTypes = {

    type: PropTypes.array.isRequired,

};*/

export default Types;
