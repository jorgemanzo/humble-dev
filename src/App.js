import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span className="blue">
            This {' '}
          </span>
          <span className="pink">
            is {' '}
          </span>
          <span>
            a work {' '}
          </span>
          <span className="pink">
            in {' '}
          </span>
          <span className="blue">
            progress!
          </span>
        </p>
      </header>
      <style jsx>{`
        .blue {
          color: #5BCEFA;
        }
        .pink {
          color: #F5A9B8;
        }
      `}</style>
    </div>
  );
}

export default App;
