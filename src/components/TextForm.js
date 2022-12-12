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

    // New styles
    let textAreaStyle = {
        backgroundColor: props.mode === 'light' ? '#f2f2f2' : 'white',
    }

    let otherComponentStyles = {
        color: props.mode === 'dark' ? '#ffffff' : 'black',
    }

    let buttonStyles = {
        // color: props.mode === 'dark' ? 'white' : 'white',
    }

    let headingStyles = {
        color: props.mode === 'dark' ? '#ffffff' : 'black',
    }

    return (
        <>
            <h1 className="textArea text-center" style={otherComponentStyles}>{props.textHeading}</h1>
            <div className="TextForm container my-4" style={otherComponentStyles}>
                <div className="my-4">
                    <label htmlFor="inputText" className="form-label my-3 fs-3">{props.textAreaLabel}</label>
                    <textarea className="form-control" placeholder="Your text ..." id="inputText" rows="10" onChange={handleChange} style={textAreaStyle}></textarea>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="aboutFlavor fs-4 my-1">{props.aboutText}</p>
                        <button className="btn fs-4 mx-1 my-1 btn btn-success" style={buttonStyles} onClick={UpperCase}>Upper case</button>
                        <button className="btn fs-4 mx-1 my-1 btn btn-success" style={buttonStyles} onClick={LowerCase}>Lower case</button>
                        <button className="btn fs-4 mx-1 my-1 btn btn-success" style={buttonStyles} onClick={StringLength}>Length of characters</button>
                        <button className="btn fs-4 mx-1 my-1 btn btn-success" style={buttonStyles} onClick={WordCounter}>Number of words</button>
                        <button className="btn fs-4 mx-1 my-1 btn btn-success" style={buttonStyles} onClick={CleanContent}>Clean content</button>
                    </div>
                </div>
            </div>
            <div className="output container" style={headingStyles}>
                <div className="row">
                    <div className="col my-4 py-4">
                        <h5 className="">Upper case content</h5>
                        <p className="">{upperCase}</p>
                        <hr />

                        <h5 className="">Lower case content</h5>
                        <p className="">{lowerCase}</p>
                        <hr />

                        <h5 className="">Total number of characters</h5>
                        <p className="">{length}</p>
                        <hr />

                        <h5 className="">Total word count</h5>
                        <p className="">{wordCount}</p>
                        <hr />

                        <h5 className="">Preview your content</h5>
                        <p className="">{text !== '' ? text : "Enter text to preview"}</p>
                        <hr />

                        <h5 className="">Only text content</h5>
                        <p className="">{cleanContent}</p>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-danger fs-4" onClick={RemoveAllContent}>Clear content</button>
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