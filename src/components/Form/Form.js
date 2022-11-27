import {useState, React} from "react";
import './Form.css'

export default function Form(props) {
    
    const [focus, setFocus] = useState("false");

    function handleFocus() {
        setFocus("true");
    }
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
            required={true}
            focused={focus}
            onBlur={handleFocus}
            />
            <small className="err">{props.errMessage}</small>
        </div>
    )
}