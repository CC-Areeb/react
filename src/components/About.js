import React, { useState } from 'react';

export default function About() {

    const [defaultStyles, setDefaultStyles] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [accordionBody, setAccordionBody] = useState({
        color: 'rgb(26, 26, 26)',
        backgroundColor: 'rgb(242, 242, 242)',
    });

    const [accordionButton, setAccordionButton] = useState({
        color: 'rgb(26, 26, 26)',
        backgroundColor: 'rgb(242, 242, 242)',
    });

    const toggleTheme = () => {
        if (defaultStyles.color === 'white') {
            let newDefaultStyles = {
                color: 'white',
                backgroundColor: 'black'
            }
            setDefaultStyles(newDefaultStyles);
        }

        else if (accordionBody.color === 'rgb(26, 26, 26)' || accordionButton.color === 'rgb(26, 26, 26)') {
            let newAccordionBody = {
                color: 'rgb(242, 242, 242)',
                backgroundColor: 'rgb(0, 51, 51)',
                transition: '0.5s',
            };
            let newAccordionButton = {
                color: 'rgb(242, 242, 242)',
                backgroundColor: 'rgb(0, 51, 51)',
                transition: '0.5s',
            };
            setAccordionBody(newAccordionBody);
            setAccordionButton(newAccordionButton);
        }

        else if (accordionBody.color === 'rgb(242, 242, 242)' || accordionButton.color === 'rgb(242, 242, 242)') {
            let newAccordionBody = {
                color: 'rgb(26, 26, 26)',
                backgroundColor: 'rgb(242, 242, 242)',
                transition: '0.5s',
            };
            let newAccordionButton = {
                color: 'rgb(26, 26, 26)',
                backgroundColor: 'rgb(242, 242, 242)',
                transition: '0.5s',
            };
            setAccordionBody(newAccordionBody);
            setAccordionButton(newAccordionButton);
        }
    }

    return (
        <>
            <div className="accordion container my-4" id="accordion" style={defaultStyles}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What we offer
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body" style={accordionBody}>
                        <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum blanditiis,
                                provident explicabo perspiciatis earum iusto! Unde, reprehenderit expedita molestias eius
                                provident animi repellendus! Consectetur dolore libero cupiditate quos odit accusamus expedita
                                repudiandae vel, ab distinctio nesciunt, accusantium reprehenderit molestiae veniam quam laudantium
                                obcaecati itaque ad nemo, facere quod beatae!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Our customers
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body" style={accordionBody}>
                        <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum blanditiis,
                                provident explicabo perspiciatis earum iusto! Unde, reprehenderit expedita molestias eius
                                provident animi repellendus! Consectetur dolore libero cupiditate quos odit accusamus expedita
                                repudiandae vel, ab distinctio nesciunt, accusantium reprehenderit molestiae veniam quam laudantium
                                obcaecati itaque ad nemo, facere quod beatae!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={accordionButton} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            News letter
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body" style={accordionBody}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatum blanditiis,
                                provident explicabo perspiciatis earum iusto! Unde, reprehenderit expedita molestias eius
                                provident animi repellendus! Consectetur dolore libero cupiditate quos odit accusamus expedita
                                repudiandae vel, ab distinctio nesciunt, accusantium reprehenderit molestiae veniam quam laudantium
                                obcaecati itaque ad nemo, facere quod beatae!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-light mt-4 mx-4 px-4 fs-3" onClick={toggleTheme}>🌓</button>
                </div>
            </div>
        </>
    )
}
