import React from 'react';
import './Input.scss';

export default function Input(props) {
    const { title, placeholder, value, onChange } = props;

    return (
        <div className="containerinputs">
            <p className="pinput">{title}</p>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input"
            />
        </div>
    );
}
