import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

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
    <div className="App">
      <Navbar 
        mode={theme}
        switchTheme={switchTheme}
        textMode={text}
      />
      <Alert
        alert={alert}
      />
      {/* <About></About> */}

      <TextForm
        mode={theme}
        switchTheme={switchTheme}
        textMode={text}
        showAlert={showAlert}
      />
    </div>
  );
}
export default App;