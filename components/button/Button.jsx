import React from 'react';
import propTypes from 'prop-types';


const Button = props => {
    return (
        <button className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    );
};

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    )
}

Button.propTypes = {
    onclick: propTypes.func
}

export default Button;
