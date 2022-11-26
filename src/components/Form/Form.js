import React from "react";
import './Form.css'

export default function Form(props) {
    return (
        <div className="input-container">
            <div className="label">
                <label>{props.label}</label>
            </div>
            <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.handleChange}
            />
        </div>
    )
}