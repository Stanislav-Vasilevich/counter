import React from 'react';
import './App.css';
import Box from './components/Box/Box';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Box/>
            <Box/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
