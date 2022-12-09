import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    // for the input text area
    const [text, setText] = useState();
    const handleChange = (event) => {
        setText(event.target.value);
    }

    // Upper case
    const [upperCase, setUpperCase] = useState();
    const UpperCase = () => {
        let upperCase = text.toUpperCase();
        setUpperCase(upperCase);
    }

    // Lower case
    const [lowerCase, setLowerCase] = useState();
    const LowerCase = () => {
        let lowerCase = text.toLowerCase();
        setLowerCase(lowerCase);
    }

    // Length of text
    const [length, setLength] = useState();
    const StringLength = () => {
        let length = text.length;
        setLength(length);
    }

    return (
        <>
            <h1 className="textArea text-center text-primary">{props.textHeading}</h1>
            <div className="TextForm container my-4">
                <div className="my-4">
                    <label htmlFor="inputText" className="form-label my-3 fs-3">{props.textAreaLabel}</label>
                    <textarea className="form-control" placeholder="Your text ..." id="inputText" rows="10" onChange={handleChange}></textarea>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="aboutFlavor fs-4 text-secondary">{props.aboutFlavor}</p>
                        <button className="btn btn-outline-primary fs-4 mx-1" onClick={UpperCase}>Upper case</button>
                        <button className="btn btn-outline-success fs-4 mx-1" onClick={LowerCase}>Lower case</button>
                        <button className="btn btn-outline-success fs-4 mx-1" onClick={StringLength}>Length of text</button>
                    </div>
                </div>
            </div>
            <div className="output container">
                <div className="row">
                    <div className="col">
                        <p className="text-center fs-1">{upperCase}</p>
                        <p className="text-center fs-1">{lowerCase}</p>
                        <p className="text-center fs-1">{length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

TextForm.propTypes = {
    textHeading: PropTypes.string.isRequired,
    textAreaLabel: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    textHeading: "Share with everyone",
    textAreaLabel: "Enter your text to flavorise",
    aboutFlavor: "Change your text 👇"
}