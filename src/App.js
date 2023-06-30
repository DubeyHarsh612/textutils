import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2f2f58';
      document.title = 'TextUtils - Dark Mode';
      showAlert('success', 'Dark mode is enabled');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert('success', 'Light mode is enabled');
    }
  };

  const greenMode = () => {
    if (mode === 'light') {
      setMode('info');
      document.body.style.backgroundColor = 'green';
      showAlert('success', 'Green mode is enabled');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode is enabled');
    }
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar title="TextUtils" mode={mode} setMode={setMode} showAlert={showAlert} toggleMode={toggleMode} greenMode={greenMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
