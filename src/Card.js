import React from 'react';
import PropTypes from 'prop-types';
import './Detail.css';

const Types = ({ types, height, weight, abilities}) => {
    return (
        <div className="card">

            <footer className="card-footer">
                {types.map((item, index) =>
                    <div className={types}>
                    <span key={index}
                          className={`card-footer-item is-uppercase ${item.type.name}`}>
                        {item.type.name}
                    </span>
                    </div>
                )}
            </footer>

            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                        Profil
                    </p>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="column is-half">
                            <p className="is-6 has-text-grey">Height: </p>
                            <p>{height / 10} m</p>
                            <p className="is-6 has-text-grey">Weight: </p>
                            <p>{weight / 10} kg</p>
                        </div>
                        <div className="column is-half">
                            <p className="is-6 has-text-grey">Abilities:</p>
                            {abilities.map((abilities, index) => {
                                return <p key={index}
                                          className="is-capitalized">{abilities.ability.name}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

Types.propTypes = {

    type: PropTypes.array.isRequired,

};

export default Types;
