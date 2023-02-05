import About from "./Components/About";
import React, { useState } from 'react'
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#18355e';
      showAlert('success', 'Dark Mode Applyed');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light Mode Applyed');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container p-3">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter The Text" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About showAlert={showAlert} mode={mode} />} />
            {/* <About/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
