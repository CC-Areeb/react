# My react app
Official documetation site: **https://reactjs.org/docs/getting-started.html**

## Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Stateless Functional Component
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
  about: PropTypes.string
}
```
This is going to check what data type you have sent by using a prop.