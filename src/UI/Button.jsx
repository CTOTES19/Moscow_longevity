import React from 'react';

const Button = (props) => {
    return (
        <button 
        className="toanswer toup"
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;
