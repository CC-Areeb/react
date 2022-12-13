# My react app
Official documetation site: **https://reactjs.org/docs/getting-started.html**

## Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Stateless Functional Component
This is a basic example of a statelss functional component where you make a function and return an HTML template using JSX
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

We can also store the html inside a js variable as shown below
```
function App() {

  const baseTemplate = 
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>

  return (
    <div className="App">
      {baseTemplate}
    </div>
  );
}

export default App;
```
To display the html, we have to call the js variable inside a set of curly brackets `{ }` .

#### Note that only 1 root tag can be returned inside the parenthesis, however if there is a situation where you want to use more than 1 root element tags then react offers `JSX fragments` which can be used as blank root tags and this will nest all other tags

```
function App() {

  const baseTemplate = 
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    > 
      Learn React
    </a>
  </header>

  return (
    <>
      <h1>
        <p>This is an example for JSX fragments</p>
      </h1>
      <div className="App">
        {baseTemplate}
      </div>
    </>
  );
}

export default App;
```
Notice that these `<>`  `</>` blank tags can allow you to have more than 1 root element tags inside the return parenthesis of a single stateless functional component

## React Functional components
These are alternatives to Stateless Functional Components.

```
import React from 'react'

export default function TextForm() {
  return (
      <div className="TextForm">TextForm</div>
  )
}
```
The working is same but a slight change in the syntax
```
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
```
You can see there are a couple of events used 
+ `onChange` which is a listening event used for detecting any changes.
+ `onClick` this will work after a button clicking event has occured.

### React hooks
+ `{ useState }` we use this to use the useState hook provided by React to manage and maintain states of elements in the documetation

### Break down

```
const [text, setText] = useState();
const handleChange = (event) => {
  setText(event.target.value);
}


const [upperCase, setUpperCase] = useState();
const UpperCase = () => {
  let upperCase = text.toUpperCase();
  setUpperCase(upperCase);
}
```
+ this block of code is used so that we can use the useState's array destructuring properties.
+ the first parameter consists of the variable name and the second parameter consists of the name of the function which will be used for event changes and state management.
+ next we have a bracket function which has the same name as the second parameter of the useState.
+ this function is responsible for any chanegs in event or detecting events like `onChange` or `onClick`.
+ another useState is used so that the text from the top can be used in the second useState.
+ we can make a blockscope variable and equal it to the first useState `text` variable.
+ next we can use the `setUpperCase` to return the changed or updated value.
+ we can access this new updated value from `upperCase` variable and use in the JSX to show output
```
<p className="text-center fs-1">{upperCase}</p>
```
+ this `{upperCase}` is how we can output JS variables in React.


## React Components
When building react apps, it is better to use break down the whole project into parts or components and we can import them in other js files.

below is a Navbar component which is in a stateless functional component
```
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Text Flavorizer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigationBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigationBar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/">About</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
```

We can make this component once and use it where ever we want without repeating the same code over and over

```
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}
export default App;
```

+ `<Navbar></Navbar>` **OR** `<Navbar />` This is the syntax we use to call different components in other JS files.
+ When making your own component, make sure to name the file starts with a camel case character.
+ The component's function name and export name should be same and for better convention use the same name as the file name.
 
## Props
We can use props to dynamically pass in the values which makes reusing same component easy
```
const Navbar = (props) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigationBar">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navigationBar">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link text-dark" aria-current="page" href="/">{props.home}</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-dark" href="/">{props.about}</a>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
          </div>
      </nav>
  );
}
export default Navbar;
```
And in the root `App` component we can use this as

```
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar 
        title="Text Flavorizer"
        about = "About flavors"
        home = "Home "
        />
    </div>
  );
}
export default App;
```
+ When we make a component
+ `title` , `about` , `home` are the prop variable we have defined in the navbar component.

We can use `propTypes` to define the type of the prop we are sending

```
Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string
}
```

Add the `.isRequired` and the you will always be required to pass in the prop value
```
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
```

We can also use `defaultProps` to assignn default values to our props
```
Navbar.defaultProps = {
  title:'Set you title here',
  home: 'Set you home link',
  about: 'Set you about link'
}
```

## Template literals for bootstrap classes
We can dynamically change the bootstrap classes by using template literals for a light and dark mode as shown below
```
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
    <div className="container-fluid">
        <a className={`navbar-brand text-${props.textMode}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigationBar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigationBar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className={`nav-link text-${props.textMode}`} aria-current="page" href="/">{props.home}</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link text-${props.textMode}`} href="/">{props.about}</a>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className={`btn btn-outline-${props.textMode} me-2`} type="submit">Search</button>
            </form>
            <label htmlFor="" className={`text-${props.textMode} fs-3 mx-3`}>🌞</label>
            <div className="form-check form-switch mx-4">
                <input className="form-check-input fs-3" onClick={props.switchTheme} type="checkbox" role="switch" id="themeSwitch"/>
                <label className={`form-check-label fs-3 text-${props.textMode}`} htmlFor="">🌑</label>
            </div>
        </div>
    </div>
</nav>
```
## Breakdown
+ first we converted the bootstrap classes as javascript template literals by adding `{ }` and adding the back-ticks ` `` ` .
+ now we can use the `$` sign for placing variables inside the string.
+ we used props as the main logic is inside the `App.js` file.
+ 🌞 , 🌑 these are just emojis that are available on vscode extensions
+ Inside `App.js`

```
const [theme, setTheme] = useState('light');
const [text, setText] = useState('dark');

const switchTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
    setText('light');
    document.body.style.backgroundColor = '#404040';
    showAlert("dark mode activated", "success")
  } else {
    setTheme('light');
    setText('dark');
    document.body.style.backgroundColor = '#fff';
    showAlert("light mode activated", "success");
  }
}
```
+ since the `Navbar.js` is using props as the parameter so we can pass in variables from different files as props.
+ we can access these variables by using `props.` and the name of variable after the dot.
+ example shown below

```
<Navbar 
  mode={theme}
  switchTheme={switchTheme}
  textMode={text}
/>
```

Inside `Navbar.js`
```
<form className="d-flex">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className={`btn btn-outline-${props.textMode} me-2`} type="submit">Search</button>
</form>
```

## Breakdown
+ the name of the variable, `textMode={text}` , is to be used as prop inside the other files `props.textMode` .
+ the variable has the data which is sent from the `useState` and we use the variable as the prop.


## Making an object
We can make objects and pass it in the `useState` functions as its arguments.
```
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  let alertObj = {
    message: message,
    type: type
  }
setAlert(alertObj);
```
## Breakdown
+ We can initialize any `useState` with null as well.
+ `alertObj` this is the object that was made so that we can use this in the our alert function component.
+ this object takes in 2 arguments when invoked.


## React function export components

The code snippet returns a function which contains JSX such as an alert.  
```
import React from 'react'

function Alert(props) {
  const firstLetterCapital = (word) => {
    const newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + newWord.slice(1);
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{firstLetterCapital(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert
```

## Breakdown 
+ `function Alert` this is the name of the functional export component which is returning a prop
+ `props.alert &&` since in the `App.js` the alert object is null at the start so the props cannot be loaded and hence throws an error, to counter this we can provide a condition that if the prop is empty then do not load it.
+ When conbined with the JSX, the first condition has to be `true` to render the JSX otherwise there will be no rendering.
+ `export default Alert` is used so that it can be imported in other react files.