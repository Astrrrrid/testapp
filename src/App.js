import React from 'react';
import meme from './meme_p.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
          <header className="App-header">
              <p>
                  Welcome to Astrid's Demo Page!!!
              </p>
              <img src={meme} className="App-meme" alt="a funny meme" />
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  Click to get more info for React
                  </a>
        
      </header>
    </div>
  );
}

export default App;
