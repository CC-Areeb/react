import React from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    return (
        <>
            <h1 className="textArea text-center text-primary">{props.textHeading}</h1>
            <div className="TextForm">
                <div className="mb-3 container">
                    <label for="inputText" className="form-label">{props.textAreaLabel}</label>
                    <textarea className="form-control" id="inputText" rows="10"></textarea>
                </div>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    textHeading: "Share with everyone",
    textAreaLabel: "Your thoughts ... 📢 🗨️"
}

// Your thoughts ... 📢 🗨️