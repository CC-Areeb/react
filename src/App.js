import './App.css';
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {

  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    let alertObj = {
      message: message,
      type: type
    }
    setAlert(alertObj);
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

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

  return (
    <>
      <Navbar mode={theme}></Navbar>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="signup" element={<Register mode={theme} />} />
            <Route path="dashboard" element={<Home mode={theme} />} />
            <Route path="about" element={<About />} />
            <Route path="text" element={<TextForm mode={theme} switchTheme={switchTheme} textMode={text} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;