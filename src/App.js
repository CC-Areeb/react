import './App.css';

function App() {

  let header = "My first react app !! 😄😄😄";

  return (
    <>
      <h1 className="main-head">{header}</h1>

      <div className="navbar-div">
        <nav className="navbar">
          <ul className="unordered-list">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Login</li>
            <li className="list-item">Register</li>
          </ul>
        </nav>
      </div>

      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, expedita doloribus? Voluptatibus animi atque explicabo, eveniet minima sunt quam doloribus ipsam praesentium tenetur sapiente fugit cumque autem dolorem, commodi blanditiis dolorum tempore neque tempora omnis ipsa, dignissimos ipsum veniam placeat. Repellendus itaque minus dolorum at vero nulla cupiditate consectetur eaque?
        </p>
      </div>
    </>
  );
}

export default App;
