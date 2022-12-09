import React from 'react';

export default function About() {
    return (
        <>
            <div className="accordion container my-4" id="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What we offer
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
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
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Our customers
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
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
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            News letter
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
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
            </div>
        </>
    )
}
