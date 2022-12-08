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