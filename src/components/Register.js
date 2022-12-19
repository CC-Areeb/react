import React, { useState } from 'react'

export default function Register(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const userName = (event) => {
        let value = event.target.value;
        setName(value);
    }

    const userPassword = (event) => {
        let value = event.target.value;
        setPassword(value);
    }

    const userEmail = (event) => {
        let value = event.target.value;
        setEmail(value);
    }

    let formStyles = {
        "marginRight": "25%",
        "marginLeft": "25%",
    }

    const signUp = (event) => {
        event.preventDefault();
        let credentials = {name, email, password}
    }

    return (
        <>
            <h1 className={`display-1 text-center my-4 text-${props.textMode}`}>User Sign Up</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className='mt-4' style={formStyles}>
                            <div className="mb-4">
                                <label htmlFor="name" className={`form-label text-${props.textMode}`}>Name</label>
                                <input type="name" value={name} onChange={userName} className="form-control" id="name" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className={`form-label text-${props.textMode}`}>Email address</label>
                                <input type="email" value={email} onChange={userEmail} className="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className={`form-text text-${props.textMode}`}>We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className={`form-label text-${props.textMode}`}>Password</label>
                                <input type="password" value={password} onChange={userPassword} className="form-control" id="password" aria-describedby="passwordHelp" />
                                <div id="passwordHelp" className={`form-text text-${props.textMode}`}>Make a strong password to protected your details.</div>
                            </div>

                            <div className="text-center mb-4">
                                <button onClick={signUp} className='btn btn-lg btn-success'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
