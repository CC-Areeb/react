import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [theme, setTheme] = useState('light');
  const [text, setText] = useState('dark');
  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setText('light');
      document.body.style.backgroundColor = '#404040';
    } else {
      setTheme('light');
      setText('dark');
      document.body.style.backgroundColor = '#fff';
    }
  } 



  return (
    <div className="App">
      <Navbar 
        mode={theme}
        switchTheme={switchTheme}
        textMode={text}
      />
      {/* <About></About> */}
      <TextForm
        mode={theme}
        switchTheme={switchTheme}
        textMode={text}
      />
    </div>
  );
}
export default App;