import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    // for the input text area
    const [text, setText] = useState();
    const handleChange = (event) => {
        setText(event.target.value);
    }

    // Clear content
    const RemoveAllContent = () => {
        let removeAll = '';
        document.getElementById("inputText").value = '';
        setText(removeAll);
        setLength(removeAll);
        setLowerCase(removeAll);
        setUpperCase(removeAll);
        setWordCount(removeAll);
        setCleanContent(removeAll);
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

    // Length of characters
    const [length, setLength] = useState();
    const StringLength = () => {
        let length = text.length;
        setLength(length);
    }

    // Word count
    const [wordCount, setWordCount] = useState();
    const WordCounter = () => {
        let words = text.split(" ").length;
        setWordCount(words);
    }

    // Remove special characters
    const [cleanContent, setCleanContent] = useState();
    const CleanContent = () => {
        let cleaner = text.replace(/[^A-Za-z]/g, ' ');
        setCleanContent(cleaner);
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
                        <p className="aboutFlavor fs-4 my-1 text-secondary">{props.aboutText}</p>
                        <button className="btn btn-outline-primary fs-4 mx-1 my-1" onClick={UpperCase}>Upper case</button>
                        <button className="btn btn-outline-success fs-4 mx-1 my-1" onClick={LowerCase}>Lower case</button>
                        <button className="btn btn-outline-secondary fs-4 mx-1 my-1" onClick={StringLength}>Length of characters</button>
                        <button className="btn btn-outline-dark fs-4 mx-1 my-1" onClick={WordCounter}>Number of words</button>
                        <button className="btn btn-light fs-4 mx-1 my-1" onClick={CleanContent}>Clean content</button>
                    </div>
                </div>
            </div>
            <div className="output container">
                <div className="row">
                    <div className="col my-4 py-4">
                        <h5 className="text-primary">Upper case content</h5>
                        <p className="">{upperCase}</p>
                        <hr />

                        <h5 className="text-success">Lower case content</h5>
                        <p className="">{lowerCase}</p>
                        <hr />

                        <h5 className="text-warning">Total number of characters</h5>
                        <p className="">{length}</p>
                        <hr />

                        <h5 className="text-danger">Total word count</h5>
                        <p className="">{wordCount}</p>
                        <hr />

                        <h5 className="text-secondary">Preview your content</h5>
                        <p className="">{text}</p>
                        <hr />

                        <h5 className="text-dark">Only text content</h5>
                        <p className="">{cleanContent}</p>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-outline-danger fs-4" onClick={RemoveAllContent}>Clear content</button>
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
    aboutText: "Change or find more about your content 👇"
}