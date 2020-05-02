import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ types}) => {
    let filler = "000";
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-2by2 has-background-light">

                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 is-capitalized">
                            <span
                                className="has-text-black">

                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                {types.map((item, index) =>
                    <span key={index}
                          className={`card-footer-item is-uppercase ${item.type.name}`}>
                        {item.type.name}
                    </span>
                )}
            </footer>
        </div>
    );
};

Card.propTypes = {

    type: PropTypes.array.isRequired,
};

export default Card;
